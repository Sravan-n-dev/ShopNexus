const express = require('express');
const router = express.Router();
const {
  createOrder,
  getMyOrders,
  getAllOrders,
  getOrderById,
  updateOrderToPaid
} = require('../controllers/orderController');
const { protect, admin } = require('../middleware/auth');

router.route('/')
  .post(protect, createOrder)
  .get(protect, admin, getAllOrders);

router.get('/myorders', protect, getMyOrders);

router.route('/:id')
  .get(protect, getOrderById)
  .put(protect, admin, updateOrderToPaid);

module.exports = router;
