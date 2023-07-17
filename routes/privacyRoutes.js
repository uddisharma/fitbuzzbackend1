const express = require("express");
const PrivacyPolicyController = require("../controllers/privacycontroller");
const router = express.Router();
router.post("/addprivacy-policies", PrivacyPolicyController.create);
router.get("/privacy-policy", PrivacyPolicyController.get);
router.put('/update-privacy-policy/:id', PrivacyPolicyController.update);
module.exports = router;
