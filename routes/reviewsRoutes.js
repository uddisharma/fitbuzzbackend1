const express = require("express");
const ReviewController = require("../controllers/reviewscontroller");
const router = express.Router();
router.get("/reviews", ReviewController.getreviews);
router.delete("/delete-review/:id", ReviewController.deletereview);
router.get('/review/:id', ReviewController.getreviewsbyId)
module.exports = router;
