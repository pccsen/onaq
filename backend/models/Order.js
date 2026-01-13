const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
    trim: true,
  },
  customerPhone: {
    type: String,
    required: true,
    trim: true,
  },
  customerEmail: {
    type: String,
    trim: true,
  },
  businessType: {
    type: String,
    required: true,
    enum: ['beauty', 'barber', 'flowers', 'ecommerce'],
  },
  serviceName: {
    type: String,
    required: true,
  },
  serviceId: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
  },
  status: {
    type: String,
    enum: ['новый', 'подтвержден', 'выполнен', 'отменен'],
    default: 'новый',
  },
  notes: {
    type: String,
    trim: true,
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

OrderSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Order', OrderSchema);

