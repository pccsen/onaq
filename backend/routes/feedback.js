const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// Create feedback
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    const feedback = new Feedback({
      name,
      email,
      message,
    });
    
    await feedback.save();
    res.status(201).json({ 
      success: true, 
      message: 'Спасибо за ваш отзыв! Мы получили ваше сообщение.',
      data: feedback 
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: 'Ошибка при отправке отзыва',
      error: error.message 
    });
  }
});

// Get all feedback (admin)
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json({ success: true, data: feedbacks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

