const mongoose = require("mongoose");
const GallerySchema = mongoose.Schema({
  photo: {
    type: Array,
    required: true,
  },
  link:{
    type: String,
    required: true,
  }
});
const GalleryModal = new mongoose.model('gallery', GallerySchema)
module.exports = GalleryModal;
