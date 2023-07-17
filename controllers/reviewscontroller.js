const ReviewModal = require("../models/reviews.js");
class ReviewController {
  static getreviews = async (req, res) => {
    const result = await ReviewModal.find();
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send("reviews not found");
    }
  };
  static deletereview = async (req, res) => {
    const _id = req.params.id;

    try {
      await ReviewModal.findByIdAndDelete({ _id }).then((data) => {
        res.json({ msg: "Deleted Successfully", products: data });
      });
    } catch (error) {
      res.send({ code: "500", msg: "Error" });
    }
  };
  static getreviewsbyId = async (req, res) => {
    const _id = req.params.id;
    const result = await ReviewModal.findById(_id);
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(500).send("no review found");
    }
  };
}
module.exports = ReviewController;
