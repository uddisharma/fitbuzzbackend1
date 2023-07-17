
const ReturnModal= require("../models/returnpolicy.js");
class ReturnController {
  static create = async (req, res) => {
    try {
      const data = new ReturnModal({
        content: req.body.content,
      });
      data.save();
      res.status(200).send("saved");
    } catch (error) {
      res.status(500).send(error);
    }
  };
  static get = async (req, res) => {
    const data = await ReturnModal.find();
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(500).send("no privacy policy found");
    }
  };
  static update = async (req, res) => {
    const _id = req.params.id;
    ReturnModal.findByIdAndUpdate(
      _id,
      {
        content: req.body.content
      },
      function (err, docs) {
        if (!err) {
          res.send({ code: 200, message: "Update Success" });
        } else {
          res.send({ code: 400, message: "Update Err" });
        }
      }
    );
  };
}
module.exports = ReturnController;
