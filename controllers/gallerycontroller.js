const GalleryModal = require("../models/photogallery.js");
class GalleryController {
  static photos = async (req, res) => {
    try {
      const photos = await GalleryModal.find();
      if (photos) {
        res.send({ code: 200, data: photos });
      } else {
        res.send({ code: "500", msg: "Error" });
      }
    } catch (error) {
      res.status(500).send("Error");
    }
  };
  static deletephoto = async (req, res) => {
    const _id = req.params.id;
    try {
      await GalleryModal.findByIdAndDelete({ _id }).then((data) => {
        res.json({ msg: "Deleted Successfully", products: data });
      });
    } catch (error) {
      res.send({ code: "500", msg: "Error" });
    }
  };
}
module.exports = GalleryController;
