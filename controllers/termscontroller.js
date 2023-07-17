
const TermsModel= require("../models/terms.js");
class TermsController {
  static create = async (req, res) => {
    try {
      const data = new TermsModel({
        content: req.body.content,
      });
      data.save();
      res.status(200).send("saved");
    } catch (error) {
      res.status(500).send(error);
    }
  };
  static get = async (req, res) => {
    const data = await TermsModel.find();
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(500).send("no privacy policy found");
    }
  };
  static update = async (req, res) => {
    const _id = req.params.id;
    TermsModel.findByIdAndUpdate(
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
module.exports = TermsController;
