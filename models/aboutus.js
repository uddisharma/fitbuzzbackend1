const mongoose = require("mongoose");
const AboutSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  photos: {
    type: Array,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
});

const AboutModal = new mongoose.model("aboutus", AboutSchema);
module.exports = AboutModal;
