const mongoose = require("mongoose");
const TermsSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});

const TermsModel = new mongoose.model("term-&-condition", TermsSchema);
module.exports = TermsModel;
