# 🛒 ShopNexus - E-Commerce MERN Stack Application

## 📝 Project Overview
ShopNexus is a full-stack e-commerce web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides a complete online shopping experience with user authentication, product management, shopping cart functionality, and order processing.

## 🔗 GitHub Repository
**GitHub Link:** [https://github.com/Sravan-n-dev/ShopNexus]

## 👥 Team Members
- **Roll No:** [B24CS032]
- **Name:** [NAREPALEM SRAVAN KUMAR]
- **Email:** [narepalemsk@iitbhilai.ac.in]
- **Roll No:** [B24CS025]
- **Name:** [M UDAY MANIKANTA]
- **Email:** [mamidium@iitbhilai.ac.in]
- **Roll No:** [B24CS046]
- **Name:** [T PREETHI VARDHAN]
- **Email:** [tanakalapv@iitbhilai.ac.in]
## ✨ Features

### User Features:
- User Registration and Login with JWT Authentication
- Browse Products by Categories
- Search Products by Name
- View Detailed Product Information
- Add Products to Shopping Cart
- Update Cart Quantities
- Remove Items from Cart
- Place Orders with Shipping Address
- View Order History
- Responsive Design for Mobile and Desktop

### Admin Features:
- Admin Dashboard
- Add New Products
- Edit Existing Products
- Delete Products
- View All Orders
- Update Order Payment Status
- Manage Product Inventory

## 🛠️ Technology Stack

### Frontend:
- **React.js** - UI Library
- **React Router DOM** - Navigation and Routing
- **Context API** - State Management
- **Axios** - HTTP Client
- **CSS3** - Styling

### Backend:
- **Node.js** - Runtime Environment
- **Express.js** - Web Framework
- **MongoDB** - NoSQL Database
- **Mongoose** - ODM Library
- **JWT** - Authentication
- **bcryptjs** - Password Hashing

## 📋 Prerequisites

Before running this project, make sure you have installed:
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn
- Git

## 🚀 Installation and Setup Instructions

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/shopnexus.git
cd shopnexus
```

### Step 2: Setup Backend
```bash
# Navigate to server folder
cd server

# Install dependencies
npm install

# Create .env file with the following content:
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/shopnexus
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=30d

# Start MongoDB service
# Windows: MongoDB should start automatically
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod

# Seed the database (optional but recommended)
npm run seed

# Start the backend server
npm run dev
```

**Backend will run on:** http://localhost:5000

### Step 3: Setup Frontend
```bash
# Open a new terminal
# Navigate to client folder from root directory
cd client

# Install dependencies
npm install

# Create .env file with the following content:
REACT_APP_API_URL=http://localhost:5000/api

# Start the frontend application
npm start
```

**Frontend will run on:** http://localhost:3000

### Step 4: Access the Application

1. Open your browser and go to http://localhost:3000
2. Register a new account or use seeded credentials:
   - **Admin:** admin@shopnexus.com / admin123
   - **User:** john@example.com / john123

