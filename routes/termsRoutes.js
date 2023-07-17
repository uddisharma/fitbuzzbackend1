const express = require("express");
const TermsController = require("../controllers/termscontroller.js");
const router = express.Router();
router.post("/add-terms-conditions", TermsController.create);
router.get("/terms-conditions", TermsController.get);
router.put("/update-terms-conditions/:id", TermsController.update);
module.exports = router;
