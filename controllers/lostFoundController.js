const  LostFound= require('../models/LostFound');
const multer = require('multer');
const path = require('path');

// Multer setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage }).array('images', 5); // Allows up to 5 images

exports.createLostFound = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        try {
            const { name, details, location , contact } = req.body;
            const imageUrls = req.files.map(file => file.path);

            const newCrime = new LostFound({
                name,
                details,
                location,
                contact,
                images: imageUrls,
            });

            await newCrime.save();
            res.status(201).json(newCrime);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
};

exports.getLostFoundItems = async (req, res) => {
    try {
        const crimes = await LostFound.find().populate('name', 'name');
        res.status(200).json(crimes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
