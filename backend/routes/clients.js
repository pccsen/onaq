const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

// Get all clients
router.get('/', async (req, res) => {
  try {
    const { businessType, status } = req.query;
    const query = {};
    
    if (businessType) query.businessType = businessType;
    if (status) query.status = status;

    const clients = await Client.find(query).sort({ createdAt: -1 });
    res.json({ success: true, data: clients });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get client by ID
router.get('/:id', async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(404).json({ success: false, message: 'Клиент не найден' });
    }
    res.json({ success: true, data: client });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get client by phone
router.get('/phone/:phone', async (req, res) => {
  try {
    const client = await Client.findOne({ phone: req.params.phone });
    if (!client) {
      return res.status(404).json({ success: false, message: 'Клиент не найден' });
    }
    res.json({ success: true, data: client });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Create new client
router.post('/', async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      businessType,
      status,
      notes,
      preferences,
    } = req.body;

    // Validation
    if (!name || !phone || !businessType) {
      return res.status(400).json({
        success: false,
        message: 'Необходимо заполнить все обязательные поля',
      });
    }

    // Check if client already exists
    const existingClient = await Client.findOne({ phone });
    if (existingClient) {
      return res.status(400).json({
        success: false,
        message: 'Клиент с таким номером телефона уже существует',
      });
    }

    const client = new Client({
      name,
      phone,
      email,
      businessType,
      status: status || 'новый',
      notes,
      preferences: preferences || [],
    });

    const savedClient = await client.save();
    res.status(201).json({ success: true, data: savedClient });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Клиент с таким номером телефона уже существует',
      });
    }
    res.status(500).json({ success: false, message: error.message });
  }
});

// Update client
router.put('/:id', async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    if (!client) {
      return res.status(404).json({ success: false, message: 'Клиент не найден' });
    }

    res.json({ success: true, data: client });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Delete client
router.delete('/:id', async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);
    if (!client) {
      return res.status(404).json({ success: false, message: 'Клиент не найден' });
    }
    res.json({ success: true, message: 'Клиент удален' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get clients statistics
router.get('/stats/summary', async (req, res) => {
  try {
    const { businessType } = req.query;
    const query = {};
    
    if (businessType) query.businessType = businessType;

    const clients = await Client.find(query);
    
    const stats = {
      total: clients.length,
      byStatus: {
        новый: clients.filter(c => c.status === 'новый').length,
        постоянный: clients.filter(c => c.status === 'постоянный').length,
        VIP: clients.filter(c => c.status === 'VIP').length,
      },
      totalRevenue: clients.reduce((sum, client) => sum + client.totalSpent, 0),
      totalOrders: clients.reduce((sum, client) => sum + client.totalOrders, 0),
      averageOrderValue: clients.length > 0 && clients.reduce((sum, c) => sum + c.totalOrders, 0) > 0
        ? clients.reduce((sum, c) => sum + c.totalSpent, 0) / clients.reduce((sum, c) => sum + c.totalOrders, 0)
        : 0,
    };

    res.json({ success: true, data: stats });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

