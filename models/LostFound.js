const mongoose = require('mongoose');

const LostFoundScehma = new mongoose.Schema({
    name: {
        type: String,

        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    dateReported: {
        type: Date,
        default: Date.now,
    },
    images: [
        {
            type: String, // Paths to the images stored on the server
        },
    ],
});

const LostFound = mongoose.model('LostFound', LostFoundScehma);

module.exports = LostFound;
