const AboutModal = require("../models/aboutus");

class AboutusController {
  static aboutus = async (req, res) => {
    try {
      const data = await AboutModal.find();
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(404).send("no data found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  };
}
module.exports = AboutusController;
