# 💬 Banter - Real-Time Chat Application

**Banter** is a modern real-time chat application built using the MERN stack. It allows users to communicate seamlessly with one another in real time, with secure authentication and efficient message handling.

This project is aimed at being a clean, scalable, and educational open-source example for developers looking to build production-ready full-stack applications with **MongoDB, Express.js, React, Node.js**, and **Socket.IO**.

---

## 🚀 Features

- 🔐 **Authentication** — Secure login and registration using JWT and hashed passwords
- 👥 **User System** — Create and manage user profiles
- 💬 **Real-time Messaging** — Chat instantly with other users via Socket.IO
- 🛡️ **Protected Routes** — Middleware-authenticated endpoints for security
- 🌐 **REST API** — Scalable backend API design
- 🎨 **Frontend in React** — Clean and responsive UI (WIP)
- 🌱 **Open Source** — Made for learning and collaboration

---

## 🛠️ Tech Stack

### Backend:
- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **JWT (JSON Web Tokens)**
- **bcrypt** for password hashing
- **Zod** for request validation
- **Cookie-parser**

### Frontend (in progress):
- **React.js**
- **Tailwind CSS**
- **Axios** for API communication
- **React Router DOM**

### Dev & Tooling:
- **dotenv**
- **ESLint**
- **Prettier**
- **Postman** (for testing APIs)
- **Git & GitHub** for version control

---

## 📁 Project Structure

```bash
banter-chat-app/
├── backend/             # Express API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── utils/
├── frontend/            # React app (UI in progress)
│   └── ...
├── .gitignore
├── README.md
└── package.json
