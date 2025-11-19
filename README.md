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
   - **Admin:** admin@shopnexus.com / admin123 (if you want to use admin panel login with this id and password)
   - **User:** john@example.com / john123 (otherwise, you have to use this format )


   - **Admin:** admin@shopnexus.com / admin123
   - **User:** john@example.com / john123

## 📁 Project Structure
```
ShopNexus/
├── client/                      # Frontend React Application
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/          # Reusable components
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   ├── ProductCard.js
│   │   │   └── CartItem.js
│   │   ├── pages/               # Page components
│   │   │   ├── Home.js
│   │   │   ├── ProductDetail.js
│   │   │   ├── Cart.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Orders.js
│   │   │   └── AdminPanel.js
│   │   ├── context/             # State management
│   │   │   ├── AuthContext.js
│   │   │   └── CartContext.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── .env
│
├── server/                      # Backend Node.js Application
│   ├── config/
│   │   └── db.js                # Database connection
│   ├── models/                  # Database schemas
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Order.js
│   ├── routes/                  # API routes
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   └── orderRoutes.js
│   ├── controllers/             # Business logic
│   │   ├── authController.js
│   │   ├── productController.js
│   │   └── orderController.js
│   ├── middleware/
│   │   └── auth.js              # Authentication middleware
│   ├── utils/
│   │   └── seedData.js          # Database seeding script
│   ├── server.js                # Main server file
│   ├── package.json
│   └── .env
│
└── README.md                    # This file
```

## 🔧 Available Scripts

### Backend (server/)
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm run seed       # Seed database with sample data
```

### Frontend (client/)
```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Orders
- `POST /api/orders` - Create new order (Protected)
- `GET /api/orders/myorders` - Get user's orders (Protected)
- `GET /api/orders` - Get all orders (Admin only)
- `GET /api/orders/:id` - Get order by ID (Protected)
- `PUT /api/orders/:id` - Update order status (Admin only)

## 🎨 UI Features

- **Responsive Design:** Works seamlessly on desktop, tablet, and mobile devices
- **Intuitive Navigation:** Easy-to-use navigation bar with cart badge
- **Product Search:** Real-time search functionality
- **Interactive Cart:** Add, update, and remove items with live total calculation
- **User Authentication:** Secure login and registration
- **Admin Dashboard:** Comprehensive admin panel for product and order management
- **Clean UI:** Modern and professional design with Amazon-inspired aesthetics

## 🔒 Security Features

- Password hashing using bcryptjs
- JWT-based authentication
- Protected routes and API endpoints
- Input validation and sanitization
- CORS configuration
- Environment variables for sensitive data

## 🐛 Troubleshooting

### MongoDB Connection Error
```bash
# Make sure MongoDB is running
# Windows: Check Services for MongoDB
# Mac: brew services list
# Linux: sudo systemctl status mongod
```

### Port Already in Use
```bash
# Change PORT in server/.env file
PORT=5001
```

### Frontend Not Connecting to Backend
```bash
# Check if proxy is set in client/package.json
"proxy": "http://localhost:5000"

# Or check REACT_APP_API_URL in client/.env
REACT_APP_API_URL=http://localhost:5000/api
```

## 📧 Contact

For any queries, please contact:
- **Roll No:** [B24CS032]
- **Name:** [NAREPALEM SRAVAN KUMAR]
- **Email:** [narepalemsk@iitbhilai.ac.in]

## 📄 License

This project is created for educational purposes as part of academic coursework.

## 🙏 Acknowledgments

- MERN Stack Documentation
- MongoDB Atlas
- Unsplash for product images
- React Community

---

**Last Updated:** [19-11-25]
**Version:** 1.0.0
```

---
