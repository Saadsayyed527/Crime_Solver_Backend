const express = require('express');
const { createLostFound, getLostFoundItems } = require('../controllers/LostFounDController');
const router = express.Router();

router.post('/lostfound', createLostFound);
router.get('/', getLostFoundItems);

module.exports = router;
