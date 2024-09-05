const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Ensure MONGO_URI is defined and is a string
        const mongoUri = process.env.MONGO;
        if (!mongoUri) {
            throw new Error('MONGO_URI is not defined');
        }

        await mongoose.connect(mongoUri);

        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
