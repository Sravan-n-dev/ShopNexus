const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a product name'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Please add a description']
    },
    price: {
      type: Number,
      required: [true, 'Please add a price'],
      min: 0
    },
    image: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      required: [true, 'Please add a category'],
      trim: true
    },
    stock: {
      type: Number,
      required: [true, 'Please add stock quantity'],
      min: 0,
      default: 0
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    numReviews: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Product', productSchema);
