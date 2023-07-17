const express = require('express');
const router= express.Router();
const GalleryController= require('../controllers/gallerycontroller.js')
router.get('/galleryimages', GalleryController.photos )
router.delete("/deletephoto/:id",GalleryController.deletephoto)
module.exports = router;