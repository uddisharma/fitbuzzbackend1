const mongoose = require("mongoose");
const ReturnSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});

const ReturnModal = new mongoose.model("return-policy", ReturnSchema);
module.exports = ReturnModal;
