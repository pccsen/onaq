const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Create contact/application
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, businessType, message, tariff } = req.body;
    
    const contact = new Contact({
      name,
      email,
      phone,
      businessType,
      message,
      tariff,
    });
    
    await contact.save();
    res.status(201).json({ 
      success: true, 
      message: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
      data: contact 
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: 'Ошибка при отправке заявки',
      error: error.message 
    });
  }
});

// Get all contacts (admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

