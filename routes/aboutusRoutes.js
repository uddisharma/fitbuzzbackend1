const express = require('express');
const AboutusController = require('../controllers/aboutuscontroller');
const router = express.Router();
router.get('/aboutus', AboutusController.aboutus)
module.exports = router;