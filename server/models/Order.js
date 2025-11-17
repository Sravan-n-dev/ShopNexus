const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product'
        },
        name: {
          type: String,
          required: true
        },
        quantity: {
          type: Number,
          required: true,
          min: 1
        },
        price: {
          type: Number,
          required: true
        },
        image: {
          type: String
        }
      }
    ],
    shippingAddress: {
      type: String,
      required: [true, 'Please add a shipping address']
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0
    },
    isPaid: {
      type: Boolean,
      default: false
    },
    paidAt: {
      type: Date
    },
    isDelivered: {
      type: Boolean,
      default: false
    },
    deliveredAt: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Order', orderSchema);
