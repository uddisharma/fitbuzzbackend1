const VideoModal = require("../models/videos.js");
class VideoController {
  static addvideos = async (req, res) => {
    try {
      const video = new VideoModal({
        video: req.body.video,
      });
      video.save();
      res.status(200).send("video added successfully");
    } catch (error) {
      res.status(400).send("error");
    }
  };
  static updateVideo = async (req, res) => {
    try {
      const _id = req.params.id;
      const result = VideoModal.findByIdAndUpdate(
        _id,
        {
          video: req.body.video,
        },
        function (err, docs) {
          if (!err) {
            res.send({ code: 200, message: "Update Success" });
          } else {
            res.send({ code: 400, message: "Update Err" });
          }
        }
      );
    } catch (error) {
      req.status(400).send("error");
    }
  };
  static deleteVideo = async (req, res) => {
    try {
      const _id = req.params.id;
      VideoModal.findByIdAndDelete({ _id }, function (err, docs) {
        if (!err) {
          res.send({ code: 200, message: "Delete Success" });
        } else {
          res.send({ code: 400, message: "Delete Err" });
        }
      });
    } catch (error) {
      res.status(500).send("error");
    }
  };
  static getVideo = async (req, res) => {
    try {
      const data = await VideoModal.find();
      if (data) {
        res.send({ code: 200, data: data });
      } else {
        res.send({ code: 400, message: "no data found" });
      }
    } catch (error) {
      res.status(500).send("error");
    }
  };
}
module.exports = VideoController;
