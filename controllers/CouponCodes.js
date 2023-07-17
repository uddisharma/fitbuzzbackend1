const CouponModel = require("../models/coupons.js");

class CouponController {
  static createCoupon = async (req, res) => {
    const { category, code, discount,discountType } = req.body;
    // console.log(category, code, discount);
    try {
      const coupon = new CouponModel({
        category: category,
        code: code,
        discount: discount,
        discountType:discountType
      });
      coupon.save();
      res.status(200).send("coupon code is created successfully");
    } catch (error) {
      res.status(404).send("failed to create coupon");
    }
  };
  static getCoupons = async (req, res) => {
    try {
      const coupons = await CouponModel.find().populate("category");
      res.status(200).send(coupons);
    } catch (error) {
      res.status(404).send("failed to get coupons");
    }
  };
  static getCouponbyId = async (req, res) => {
    const id = req.params.id;
    // console.log(id);
    try {
      // const coupons = await CouponModel.find({ _id }).populate("category");
      // res.status(200).json({ data: coupons });
      const coupons = await CouponModel.find({ _id: id })
        .populate("category")
        .then((data) => {
          res.status(200).send(data);
          // console.log(orders.user.order);
        });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  static DeleteCoupon = async (req, res) => {
    try {
      const coupon = await CouponModel.findByIdAndDelete(req.params.id);
      res.status(200).send("deleted coupon");
    } catch (error) {
      res.status(404).send("failed to delete coupon");
    }
  };
  static UpdateCoupon = async (req, res) => {
    try {
      const coupon = await CouponModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.status(200).send("updated coupon");
    } catch (error) {
      res.status(404).send("failed to update coupon");
    }
  };
}
module.exports = CouponController;
