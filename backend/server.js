import express from "express";
import cors from "cors";
import fs from "fs-extra";
import bcrypt from "bcryptjs";
const app = express();
app.use(cors());
app.use(express.json());

const DB_FILE = "./db.json";
if (!fs.existsSync(DB_FILE)) {
  fs.writeJsonSync(DB_FILE, { users: [] }, { spaces: 2 });
  console.log("Created db.json");
}

const result  = async function readDB(){ return fs.readJson(DB_FILE); }

console.log("the result >>>>",result);

async function writeDB(d){ return fs.writeJson(DB_FILE, d, { spaces: 2 }); }

app.post("/signup", async (req, res) => {
  try {
    const newUser = req.body || {};
    if (!newUser.email || !newUser.password) return res.status(400).json({ message: "Email and password required" });
    const db = await readDB();
    if (db.users.find(u=>u.email===newUser.email)) return res.status(400).json({ message: "Email already registered" });
    const hashed = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashed;
    db.users.push(newUser);
    await writeDB(db);
    res.status(201).json({ message: "Account created successfully" });
  } catch(err){
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get('/getusers', async (req, res) => {
const db = await readDB();
res.json(db.users); 
return db.users
})

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) return res.status(400).json({ message: "Email and password required" });
    const db = await readDB();
    const user = db.users.find(u=>u.email===email);
    if (!user) return res.status(401).json({ message: "Invalid credentials" });
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });
    const { password:_, ...safeUser } = user;
    res.json({ message: "Login successful", user: safeUser });
  } catch(err){
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/user/:email", async (req, res) => {
  try {
    const db = await readDB();
    const user = db.users.find(u=>u.email === req.params.email);
    if (!user) return res.status(404).json({ message: "User not found" });
    const { password:_, ...safeUser } = user;
    res.json(safeUser);
  } catch(err){
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});
app.use(cors());

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
