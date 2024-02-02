const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  pizzas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pizza' }],

});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
