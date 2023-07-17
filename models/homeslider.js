const mongoose = require("mongoose");
const SliderSchema = new mongoose.Schema({
  images: {
    type: Array,
    required: true,
  },
});

const SliderModal = new mongoose.model("slider", SliderSchema);

module.exports = SliderModal;
