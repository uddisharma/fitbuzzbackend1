const express = require('express')
const router = express.Router();
const Cardcontroller= require('../controllers/cardcontroller');
// router.post("/create-product",  Cardcontroller.create_product);
router.get("/products", Cardcontroller.get_products);
router.get("/product/:id", Cardcontroller.get_products_byID);
router.get("/productname/:name", Cardcontroller.get_products_byName);
router.patch('/update-stock/:id', Cardcontroller.update_stock)
router.post('/update-stock/:id', Cardcontroller.update_product_inc)
router.delete("/product/delete/:id", Cardcontroller.Delete);
router.get('/best-sellers', Cardcontroller.BestSellers)
router.get('/category', Cardcontroller.get_productby_category)
// router.put("/product/update/:id", Cardcontroller.update_product);
module.exports = router;
