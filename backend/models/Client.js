const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  businessType: {
    type: String,
    required: true,
    enum: ['beauty', 'barber', 'flowers', 'ecommerce'],
  },
  status: {
    type: String,
    enum: ['новый', 'постоянный', 'VIP'],
    default: 'новый',
  },
  totalOrders: {
    type: Number,
    default: 0,
  },
  totalSpent: {
    type: Number,
    default: 0,
  },
  lastVisit: {
    type: Date,
  },
  notes: {
    type: String,
    trim: true,
  },
  preferences: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

ClientSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Client', ClientSchema);

