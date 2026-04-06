# 🚀 Backend API - User Management

## 📌 Description
Simple backend API using:
- Express.js
- MySQL
- JWT Authentication
- bcrypt password hashing

---

## 🔐 Features
- Register
- Login
- JWT Authentication
- Protected routes
- Role-based access (admin)

---

## ⚙️ Setup

### 1. Install dependencies
npm install

### 2. Create .env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=myapp
JWT_SECRET=your_secret

### 3. Run server
node server.js

---

## 📡 API

### Login
POST /users/login

### Get users
GET /users (requires token)

---

## 🧠 Author
NoirNguyen2007
