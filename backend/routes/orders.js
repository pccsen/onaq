const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Get all orders
router.get('/', async (req, res) => {
  try {
    const { businessType, status, date } = req.query;
    const query = {};
    
    if (businessType) query.businessType = businessType;
    if (status) query.status = status;
    if (date) {
      const startDate = new Date(date);
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(date);
      endDate.setHours(23, 59, 59, 999);
      query.date = { $gte: startDate, $lte: endDate };
    }

    const orders = await Order.find(query).sort({ createdAt: -1 });
    res.json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get order by ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ success: false, message: 'Заказ не найден' });
    }
    res.json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Create new order
router.post('/', async (req, res) => {
  try {
    const {
      customerName,
      customerPhone,
      customerEmail,
      businessType,
      serviceName,
      serviceId,
      price,
      date,
      time,
      status,
      notes,
    } = req.body;

    // Validation
    if (!customerName || !customerPhone || !businessType || !serviceName || !price || !date) {
      return res.status(400).json({
        success: false,
        message: 'Необходимо заполнить все обязательные поля',
      });
    }

    const order = new Order({
      customerName,
      customerPhone,
      customerEmail,
      businessType,
      serviceName,
      serviceId,
      price,
      date: new Date(date),
      time,
      status: status || 'новый',
      notes,
    });

    const savedOrder = await order.save();
    res.status(201).json({ success: true, data: savedOrder });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Update order
router.put('/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    if (!order) {
      return res.status(404).json({ success: false, message: 'Заказ не найден' });
    }

    res.json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Delete order
router.delete('/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ success: false, message: 'Заказ не найден' });
    }
    res.json({ success: true, message: 'Заказ удален' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get orders statistics
router.get('/stats/summary', async (req, res) => {
  try {
    const { businessType, startDate, endDate } = req.query;
    const query = {};
    
    if (businessType) query.businessType = businessType;
    if (startDate && endDate) {
      query.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    const orders = await Order.find(query);
    
    const stats = {
      total: orders.length,
      totalRevenue: orders.reduce((sum, order) => sum + order.price, 0),
      byStatus: {
        новый: orders.filter(o => o.status === 'новый').length,
        подтвержден: orders.filter(o => o.status === 'подтвержден').length,
        выполнен: orders.filter(o => o.status === 'выполнен').length,
        отменен: orders.filter(o => o.status === 'отменен').length,
      },
      averageOrder: orders.length > 0 
        ? orders.reduce((sum, order) => sum + order.price, 0) / orders.length 
        : 0,
    };

    res.json({ success: true, data: stats });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

