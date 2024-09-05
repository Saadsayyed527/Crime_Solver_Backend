const express = require('express');
const { reportCrime, getCrimes } = require('../controllers/crimeController');
const router = express.Router();

router.post('/report', reportCrime);
router.get('/', getCrimes);

module.exports = router;
