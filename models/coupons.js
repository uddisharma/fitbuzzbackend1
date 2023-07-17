const mongoose = require("mongoose");
const coupons = new mongoose.Schema({
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
      // required: true,
    },
  ],
  // category: {
  //   type: String,
  //   required: true,
  // },
  code: { type: String },
  discount: {
    type: Number,
    required: true,
  },
  discountType: {
    type: String,
    required: true,
  }
});
const CouponModel = new mongoose.model("coupon_code", coupons);
module.exports = CouponModel;
