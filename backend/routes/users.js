const express = require('express');
const router = express.Router();

// Temporary storage for demonstration purposes
let userData = [];

// Route for handling user registration (POST)
router.post('/register', (req, res) => {
  try {
    const user = req.body;
    userData.push(user); // Store user data temporarily
    res.status(200).json({ message: 'User registered successfully', data: user });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
});

// Route for retrieving user data (GET)
router.get('/register', (req, res) => {
  try {
    res.status(200).json({ message: 'User data retrieved successfully', data: userData });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user data', error });
  }
});

module.exports = router;
