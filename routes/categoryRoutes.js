const CategoryController= require('../controllers/categorycontroller.js')
const express = require("express");
const router = express.Router();
// router.post('/createcategory',CategoryController.createCategory)
router.get('/categories',CategoryController.allcategories)
router.get('/category/:id',CategoryController.getCategoryById)
router.patch('/updatecategory/:id',CategoryController.updatecategory)
router.delete('/deletecategory/:id',CategoryController.deletecategory)
module.exports= router
