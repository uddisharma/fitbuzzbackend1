const mongoose = require("mongoose");
const PrivacySchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});

const PrivacyModal = new mongoose.model("privacy-policy", PrivacySchema);
module.exports = PrivacyModal;
