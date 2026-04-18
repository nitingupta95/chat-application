# MERN Real-Time Messenger 💬

A full-stack, real-time chat application built with the **MERN** stack (MongoDB, Express, React, Node.js) and **Socket.io**. It is designed to replicate the instant messaging capabilities of modern applications!

## ✨ Features

- **⚡️ Real-time Messaging:** Lightning-fast, instant message syncing and room broadcasting using `Socket.io`.
- **🟢 Online Status Tracking:** Real-time visibility into whether a user is active or offline across the platform.
- **👥 Group Dynamics:** Built-in capabilities to create and efficiently manage group chats beyond standard 1-to-1 messaging.
- **🔒 Secure Authentication:** Handled via JSON Web Tokens (JWT) stored in HTTP-Only secure cookies with protected cross-site (SameSite) policies.
- **🛡️ Type-Safe Validation:** Robust client-side form validation architecture leveraging `zod` and `react-hook-form`.
- **☁️ Media Uploads:** Built-in integration with Cloudinary for seamless frontend image uploads directly into the chat stream.
- **🎨 Modern UI & Theming:** A beautiful, responsive frontend styled with **Tailwind CSS**, featuring dedicated Dark/Light mode toggles, intelligent `.glass` tokens. 
- **🚀 Ultra-Fast Static Splash:** The landing page is performance optimized to require **zero API calls** on load, serving 100% statically to maximize SEO.
- **📦 Reliable State Management:** Utilizing **Zustand** for lightweight, predictable global state architecture instead of heavy context providers.
- **🚀 Production Ready:** Configured explicitly to support split-domain HTTP/WSS deployments (e.g., Vercel for the client frontend, Render.com for the WebSocket backend).

## 🛠️ Tech Stack

**Frontend (`/client`)**
- React (bootstrapped with Vite)
- Zustand (State Management)
- Tailwind CSS (Styling)
- React Router (SPA Routing)
- Socket.io-client
- Axios

**Backend (`/backend`)**
- Node.js & Express
- MongoDB & Mongoose (Database)
- Socket.io (Real-time Websocket Engine)
- Passport.js (JWT Strategy Authentication)
- Cloudinary (Media Storage)

## 🏃‍♂️ Running Locally

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed along with a [MongoDB](https://www.mongodb.com/) instance/cluster.

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory:
```env
PORT=8000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
FRONTEND_ORIGIN=http://localhost:5173

# Cloudinary Setup (Optional for images)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
Run the development server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd client
npm install
```
Create a `.env.local` file in the `client` directory (optional: it defaults to localhost:8000/api if absent):
```env
VITE_API_URL=http://localhost:8000/api
```
Run the Vite development server:
```bash
npm run dev
```

## 🚀 Deployment Guide

This repository is strictly configured to decouple the frontend from the backend in production so WebSockets run flawlessly.

### 1. Backend (Render.com)
A `render.yaml` Blueprint file is included at the root!
1. Import the repository into **Render** as a New Blueprint.
2. Render will automatically detect the backend and provision a web service.
3. Fill out the environment variables in the Render Dashboard (Be sure to set `FRONTEND_ORIGIN` to your **Vercel** URL and drop the trailing `/`).

### 2. Frontend (Vercel)
1. Import the repository into **Vercel**.
2. Within the Vercel setup, explicitly set the **Root Directory** to `client`.
3. Set your production `VITE_API_URL` to your live Render API URL in the environment settings (e.g. `https://your-backend.onrender.com/api`).
4. **Deploy.** 

*Note: A `vercel.json` rewrite file is already embedded inside the `/client` folder so single-page application (SPA) paths like `/chat` will never 404!*
