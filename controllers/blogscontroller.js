const BlogsModal = require("../models/blogs.js");
class BlogsController {
  static allblogs = async (req, res) => {
    try {
      const result = await BlogsModal.find();
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send("blogs not found");
      }
    } catch (error) {
      res.status(404).send(error);
    }
  };
  static getblogById = async (req, res) => {
    const _id = req.params.id;
    try {
      const result = await BlogsModal.findById(_id);
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send("Blog not found");
      }
    } catch (error) {
      res.status(404).send(error);
    }
  };
  static delete = async (req, res) => {
    const _id = req.params.id;
    try {
      BlogsModal.findByIdAndDelete(_id)
        .then((result) => {
          res.status(200).send("deleted successfully");
        })
        .catch((err) => {
          res.status(500).send("failed to delete");
        });
    } catch (error) {
      res.status(404).send(error);
    }
  };
}
module.exports = BlogsController;
