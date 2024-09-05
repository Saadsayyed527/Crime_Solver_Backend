const mongoose = require('mongoose');

const crimeSchema = new mongoose.Schema({
    reporter: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
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

const Crime = mongoose.model('Crime', crimeSchema);

module.exports = Crime;
