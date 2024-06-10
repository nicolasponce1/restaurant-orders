const express = require('express');
const router = express.Router();
const Order = require('../models/order');
router.post('/new', (req, res) => {
 const { tableNumber, items } = req.body;

 if (!tableNumber || !items || !Array.isArray(items)) {
 return res.status(400).send('Invalid input');
 }

 const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
 const total = subtotal * 1.10; // Incluye la propina del 10%
 Order.createOrder(tableNumber, items, subtotal, total, (err, orderId) => {
 if (err) {
 return res.status(500).send('Error creating order');
 }
 res.status(201).send(`Order created with ID: ${orderId}`);
 });
});
module.exports = router;