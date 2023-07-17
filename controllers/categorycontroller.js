const categoryModal = require("../models/category.js");
class CategoryController {
  static createCategory = async (req, res) => {
    try {
      const { category, subCategory,photo } = req.body;
      const categorycard = new categoryModal({
        category,
        subCategory,
        photo,
      });
      categorycard.save();
      res
        .status(200)
        .json({ status: 200, msg: "category is created successfully" });
    } catch (err) {
      res.status(500).send(err);
    }
  };
  static getCategoryById = async (req, res) => {
    const _id = req.params.id;
    const category = await categoryModal.find({ _id });
    if (category) {
      res.status(200).json({ status: 200, category: category });
    } else {
      res.status(404).json({ status: 404, msg: "category not found" });
    }
  };
  static allcategories = async (req, res) => {
    const categories = await categoryModal.find({});
    if (categories.length > 0) {
      res.status(200).json({ status: 200, categories: categories });
    } else {
      res.status(500).json({ status: 500, msg: "not found" });
    }
  };
  static updatecategory = async (req, res) => {
    const _id = req.params.id;
    try {
      const category = await categoryModal.findByIdAndUpdate(_id, {
        $set: {
          category: req.body.category,
          subCategory: req.body.subCategory,
        },
      });
      res.status(200).send("category updated");
    } catch (error) {
      res.status(500).send(error);
    }
  };
  static deletecategory = async (req, res) => {
    const _id = req.params.id;
    try {
      const Deletecategory = await categoryModal.findByIdAndDelete({ _id });
      res.status(200).send("category deleted successfully");
    } catch (error) {
      res.status(500).send(error);
    }
  };
}
module.exports = CategoryController;
