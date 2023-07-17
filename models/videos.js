const mongoose = require("mongoose");
const VideoSchema = new mongoose.Schema({
  video: {
    type: String,
    required: true,
  },
});
const VideoModal = new mongoose.model("video", VideoSchema);
module.exports = VideoModal;