const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },

});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;
