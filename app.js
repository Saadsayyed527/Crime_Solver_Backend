const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const crimeRoutes = require('./routes/crimeRoutes');
const lostfoundroute = require('./routes/LostFoundRoutes.js')
const path = require('path');
const cors = require('cors')
const app = express();
const dotenv = require('dotenv')
dotenv.config();
// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/crimes', crimeRoutes);
app.use('/api/lostfound', lostfoundroute);


// Start Server
const PORT = process.env.PORT||5000 ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
