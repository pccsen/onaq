const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  businessType: {
    type: String,
    enum: ['beauty', 'barber', 'flowers', 'ecommerce', 'other'],
    default: 'other',
  },
  message: {
    type: String,
  },
  tariff: {
    type: String,
    enum: ['basic', 'pro', 'whitelabel'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Contact', contactSchema);

