// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming you have a User model defined

// Register a new user
router.post('/register', async (req, res) => {
    try {
        const { name, phone, address } = req.body;

        // Create a new user with the data from the request body
        const newUser = new User({
            name,
            phone,
            address,
        });

        // Save the new user to the database
        await newUser.save();

        // Return the saved user
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error during user registration:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
