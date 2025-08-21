🏦 Bank Management System
📌 Overview

The Bank Management System is a software application designed to digitally manage customer, employee, and account details in a bank.
It uses front-end UI for interaction, database management for secure data storage, and follows Object-Oriented Programming (OOP) principles for modular and maintainable code.

This project demonstrates how banking operations (customer management, account handling, balance management, and authentication) can be implemented in a structured and scalable way.

⚙️ Features

User Authentication (Login system with Roles & Permissions)

Customer Management (Add, update, view, delete customers)

Employee Management (Assign employees to customers/accounts)

Account Management (Create and manage savings/current accounts)

Balance Management (Track deposits, withdrawals, account balance)

Role-Based Access Control (Admin, Employee, Customer)

Database Integration (Relational model with ER schema)

Object-Oriented Design (Encapsulation, Inheritance, Polymorphism)

🛠️ Tech Stack

Front-end: HTML, CSS, JavaScript (or GUI framework if used)

Back-end / OOP: C++ / Java / Python (mention whichever you used)

Database: MySQL / PostgreSQL / SQLite

Version Control: Git & GitHub

🗂️ Project Structure
Bank-Management-System/
│── frontend/            # UI components
│── src/                 # Source code (OOP classes)
│── database/            # SQL scripts (schema + sample data)
│── docs/                # ER diagrams, schema, documentation
│── README.md            # Project documentation

📊 Database Schema (Simplified)

User (user_id, name, email, role_id)

Roles (role_id, role_name, role_desc)

Permission (per_id, role_id, per_name)

Customer (cus_id, name, mobile, email, address)

Employee (emp_id, name, email, assigned_customers)

Accounts (act_id, cus_id, emp_id, act_type, balance)

Balance (bal_id, act_id, bal_amt)

(See ER diagram in docs/ for details.)

📖 Object-Oriented Design

Classes:

User

Customer

Employee

Account

Balance

Role

Permission

OOP Concepts Used:

Encapsulation: Data hidden inside classes with getters/setters.

Inheritance: Specialized users (Customer, Employee) extend User class.

Polymorphism: Common methods like viewDetails() behave differently for each role.

Abstraction: Interfaces/abstract classes for bank operations.