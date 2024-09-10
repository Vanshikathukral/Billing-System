const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Item = require('./models/Item');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// MongoDB connection URI
const mongoURI = 'mongodb+srv://aadibharadwaj3:Aditya$1234567890@cluster0.wmdl9.mongodb.net/reshabh?retryWrites=true&w=majority&appName=Cluster0';
// const mongoURI = 'mongodb+srv://vanshika943be22:Vanshika%123@cluster0.h068v.mongodb.net/Vanshika?retryWrites=true&w=majority&appName=Cluster0';
// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// Define a route to handle adding items
app.post('/api/items', async (req, res) => {
  const { itemName, price, quantity } = req.body;

  try {
    const newItem = new Item({ itemName, price, quantity });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: 'Error adding item', details: err });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


