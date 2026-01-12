const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/onaq';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/feedback', require('./routes/feedback'));
app.use('/api/demo', require('./routes/demo'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'OnaQ API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

