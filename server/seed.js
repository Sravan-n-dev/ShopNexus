// ============================================
// server/utils/seedData.js
// Script to populate MongoDB with sample data
// ============================================

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

// Load environment variables
dotenv.config();

// Import Models
const User = require('../server/models/User');
const Product = require('../server/models/Product');
const Order = require('../server/models/Order');

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected for seeding...');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Sample Users Data
const users = [
  {
    name: 'Admin User',
    email: 'admin@amazon.com',
    password: 'admin123',
    address: {
      street: '123 Admin Street',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400001',
      country: 'India'
    }
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'john123',
    address: {
      street: '456 Customer Lane',
      city: 'Delhi',
      state: 'Delhi',
      zipCode: '110001',
      country: 'India'
    }
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'jane123',
    address: {
      street: '789 Buyer Road',
      city: 'Bangalore',
      state: 'Karnataka',
      zipCode: '560001',
      country: 'India'
    }
  }
];

// Sample Products Data
const products = [
  // Electronics
  {
    name: 'Apple iPhone 15 Pro Max',
    description: 'Latest iPhone with A17 Pro chip, titanium design, and advanced camera system. 256GB storage with 5G capability.',
    price: 134900,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500',
    category: 'Electronics',
    stock: 50,
    rating: 4.8,
    numReviews: 245
  },
  {
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Premium Android smartphone with S Pen, 200MP camera, and AI features. 12GB RAM, 512GB storage.',
    price: 129999,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500',
    category: 'Electronics',
    stock: 40,
    rating: 4.7,
    numReviews: 189
  },
  {
    name: 'Sony WH-1000XM5 Headphones',
    description: 'Industry-leading noise canceling wireless headphones with 30-hour battery life and premium sound quality.',
    price: 29990,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500',
    category: 'Electronics',
    stock: 100,
    rating: 4.9,
    numReviews: 567
  },
  {
    name: 'Dell XPS 13 Laptop',
    description: '13.4" FHD+ laptop with Intel Core i7, 16GB RAM, 512GB SSD. Perfect for professionals and students.',
    price: 119999,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500',
    category: 'Electronics',
    stock: 25,
    rating: 4.6,
    numReviews: 312
  },
  {
    name: 'Apple Watch Series 9',
    description: 'Advanced health and fitness tracking smartwatch with always-on Retina display and ECG app.',
    price: 41900,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500',
    category: 'Electronics',
    stock: 75,
    rating: 4.7,
    numReviews: 423
  },

  // Fashion
  {
    name: 'Levi\'s Men\'s 511 Slim Fit Jeans',
    description: 'Classic slim fit jeans in dark blue wash. Comfortable stretch denim for everyday wear.',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
    category: 'Fashion',
    stock: 200,
    rating: 4.5,
    numReviews: 1245
  },
  {
    name: 'Nike Air Max 270 Sneakers',
    description: 'Comfortable running shoes with Max Air cushioning. Available in multiple colors and sizes.',
    price: 12995,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    category: 'Fashion',
    stock: 150,
    rating: 4.6,
    numReviews: 892
  },
  {
    name: 'Zara Women\'s Floral Summer Dress',
    description: 'Elegant floral print midi dress perfect for summer occasions. Lightweight and breathable fabric.',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500',
    category: 'Fashion',
    stock: 80,
    rating: 4.4,
    numReviews: 456
  },
  {
    name: 'Ray-Ban Aviator Sunglasses',
    description: 'Classic aviator sunglasses with UV protection. Timeless style with metal frame.',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500',
    category: 'Fashion',
    stock: 120,
    rating: 4.8,
    numReviews: 678
  },

  // Home & Kitchen
  {
    name: 'Instant Pot Duo 7-in-1 Pressure Cooker',
    description: '6-quart multi-use programmable pressure cooker, slow cooker, rice cooker, and more.',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=500',
    category: 'Home',
    stock: 60,
    rating: 4.7,
    numReviews: 3421
  },
  {
    name: 'Philips Air Fryer XXL',
    description: 'Large capacity air fryer with rapid air technology. Cook healthy meals with up to 90% less fat.',
    price: 14999,
    image: 'https://images.unsplash.com/photo-1623662186929-d1d5ec80eec6?w=500',
    category: 'Home',
    stock: 45,
    rating: 4.6,
    numReviews: 1876
  },
  {
    name: 'Dyson V11 Cordless Vacuum',
    description: 'Powerful cordless vacuum with intelligent cleaning modes and 60-minute runtime.',
    price: 52900,
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500',
    category: 'Home',
    stock: 30,
    rating: 4.8,
    numReviews: 934
  },
  {
    name: 'Amazon Basics Microwave',
    description: 'Compact microwave oven with Alexa integration. 700W power with 10 power levels.',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=500',
    category: 'Home',
    stock: 90,
    rating: 4.3,
    numReviews: 2341
  },

  // Books
  {
    name: 'Atomic Habits by James Clear',
    description: 'Bestselling self-help book on building good habits and breaking bad ones. Paperback edition.',
    price: 599,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500',
    category: 'Books',
    stock: 300,
    rating: 4.9,
    numReviews: 5678
  },
  {
    name: 'The Psychology of Money by Morgan Housel',
    description: 'Timeless lessons on wealth, greed, and happiness. Essential reading for financial literacy.',
    price: 450,
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500',
    category: 'Books',
    stock: 250,
    rating: 4.8,
    numReviews: 3421
  },
  {
    name: 'Harry Potter Complete Collection',
    description: 'All 7 books in the Harry Potter series. Perfect gift set for fans and new readers.',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500',
    category: 'Books',
    stock: 100,
    rating: 5.0,
    numReviews: 8923
  },

  // Sports
  {
    name: 'Yoga Mat - Extra Thick',
    description: 'Premium 6mm thick yoga mat with carrying strap. Non-slip surface for all yoga styles.',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
    category: 'Sports',
    stock: 180,
    rating: 4.5,
    numReviews: 1234
  },
  {
    name: 'Adjustable Dumbbell Set',
    description: 'Space-saving adjustable dumbbells, 2.5kg to 24kg per hand. Perfect for home gym.',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500',
    category: 'Sports',
    stock: 50,
    rating: 4.7,
    numReviews: 876
  },
  {
    name: 'Fitbit Charge 6 Fitness Tracker',
    description: 'Advanced fitness tracker with heart rate monitor, GPS, and 7-day battery life.',
    price: 13999,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500',
    category: 'Sports',
    stock: 70,
    rating: 4.6,
    numReviews: 1567
  },
  {
    name: 'Professional Tennis Racket',
    description: 'Lightweight carbon fiber tennis racket for intermediate to advanced players.',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=500',
    category: 'Sports',
    stock: 40,
    rating: 4.4,
    numReviews: 345
  }
];

// Seed Function
const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    console.log('Clearing existing data...');
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    console.log('Data cleared!');

    // Hash passwords for users
    const hashedUsers = await Promise.all(
      users.map(async (user) => ({
        ...user,
        password: await bcrypt.hash(user.password, 10)
      }))
    );

    // Insert Users
    console.log('Inserting users...');
    const createdUsers = await User.insertMany(hashedUsers);
    console.log(`${createdUsers.length} users inserted!`);

    // Insert Products
    console.log('Inserting products...');
    const createdProducts = await Product.insertMany(products);
    console.log(`${createdProducts.length} products inserted!`);

    console.log('\n✅ Database seeded successfully!');
    console.log('\n📝 Sample Login Credentials:');
    console.log('Email: admin@amazon.com | Password: admin123');
    console.log('Email: john@example.com | Password: john123');
    console.log('Email: jane@example.com | Password: jane123');
    
    process.exit();
  } catch (error) {
    console.error(`Error seeding database: ${error.message}`);
    process.exit(1);
  }
};

// Run seed function
seedDatabase();
