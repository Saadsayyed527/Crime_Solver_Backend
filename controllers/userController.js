const User = require('../models/User');

exports.registerUser = async (req, res) => {
    try {
        const { name, phone,address } = req.body;
        const newUser = new User({ name, phone , address });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
