const mongoose = require("mongoose");
const ReviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  photos: {
    type: Array,
    required: true,
  },
});
const ReviewModal =  new mongoose.model("review", ReviewSchema);
module.exports = ReviewModal;