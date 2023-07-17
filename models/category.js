const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: Array,
  },
  photo: {
    type: Array,
    required:true,
  },
});

const categoryModal = new mongoose.model("categories", CategorySchema);

module.exports = categoryModal;
