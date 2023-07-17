const express = require("express");
const BlogsController = require("../controllers/blogscontroller");
const router = express.Router();
router.get("/blogs", BlogsController.allblogs);
router.get("/blog/:id", BlogsController.getblogById)
router.delete("/delete-blog/:id", BlogsController.delete)
module.exports = router;
