const mongoose = require("mongoose");
const BlogsSchema = mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },
});
const BlogsModal = new mongoose.model("blog", BlogsSchema);
module.exports = BlogsModal;
