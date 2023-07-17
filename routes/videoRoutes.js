const express = require("express");
const VideoController = require("../controllers/videocontroller.js");
const router = express.Router();
router.post("/addvideo", VideoController.addvideos);
router.get("/videos", VideoController.getVideo);
router.delete("/deletevideo/:id", VideoController.deleteVideo);
router.put("/updatevideo/:id", VideoController.updateVideo);
module.exports = router;
