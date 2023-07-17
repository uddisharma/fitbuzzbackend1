const express = require("express");
const ReturnController = require("../controllers/returncontroller.js");
const router = express.Router();
router.post("/add-return-policy", ReturnController.create);
router.get("/return-policy", ReturnController.get);
router.put("/update-return-policy/:id", ReturnController.update);
module.exports = router;
