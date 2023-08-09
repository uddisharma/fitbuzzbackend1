const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const multer = require("multer");
dotenv.config();
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/connectdb.js");
const userRoutes = require("./routes/userRoutes.js");
const cardRoutes = require("./routes/cardRoutes.js");
const adminRoute = require("./routes/adminRoutes.js");
const contactRoute = require("./routes/contactRoutes.js");
const orderRoute = require("./routes/OrderRoute.js");
const userVarRoute = require("./routes/uservarRoutes.js");
const couponRoute = require("./routes/couponRoutes.js");
const categoryRoute = require("./routes/categoryRoutes.js");
const cancelfeedbackRoute = require("./routes/cancelFeedbackRoutes.js");
const ProductModel = require("./models/Card.js");
const videoRoute = require("./routes/videoRoutes.js");
require("./controllers/passport.js");
const session = require("express-session");
const passport = require("passport");
const SliderModal = require("./models/homeslider.js");
const GalleryModal = require("./models/photogallery.js");
const galleryRoute = require("./routes/galleryRoutes.js");
const BlogsModal = require("./models/blogs.js");
const BlogsRoute = require("./routes/blogRoutes.js");
const categoryModal = require("./models/category.js");
const ReviewModal = require("./models/reviews.js");
const ReviewRoute = require("./routes/reviewsRoutes.js");
const PrivacyRoute = require("./routes/privacyRoutes.js");
const ReturnRoute = require("./routes/returnRoutes.js");
const TermsRoute = require("./routes/termsRoutes.js");
const AboutModal = require("./models/aboutus.js");
const AboutusRoute = require("./routes/aboutusRoutes.js");
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const axios = require("axios");
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });
//  const upload = multer({ dest: 'uploads/' })
// app.use(express.static(path.join(__dirname, "build")));
// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

const corsOptions = {
  origin: "https://fitbuzzahop.com",
  credentials: true,
  optionSuccessStatus: 200,
  // origin: process.env.REMOTE_CLIENT_APP
};
connectDB(DATABASE_URL);
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.json());
app.post("/create-product", upload.array("products", 12), (req, res) => {
  // console.log(req.files);
  let temp_arr = [];
  for (let x of req.files) {
    temp_arr.push(x.path);
  }
  // console.log(temp_arr);
  let result = ProductModel.create({
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    mrp: req.body.mrp,
    discount: req.body.discount,
    video: req.body.video,
    images: temp_arr,
    stock: req.body.stock,
    description: req.body.description,
    keywords: req.body.keywords,
    // bestseller: req.body.bestseller,
    length: req.body.length,
    breadth: req.body.breadth,
    height: req.body.height,
    weight: req.body.weight,
    slug: req.body.name.split(" ").join("-"),
  });
  if (result) {
    res.send({
      code: 200,
      message: " product Upload Success",
      product: result,
    });
  } else {
    res.send({ code: 500, message: "Upload Err" });
  }
});
app.post("/add-slider", upload.array("products", 12), (req, res) => {
  let temp_arr = [];
  for (let x of req.files) {
    temp_arr.push(x.path);
  }

  const result = SliderModal.create({
    images: temp_arr,
  });
  if (result) {
    res.send({
      code: 200,
      message: "Slider Images Upload Success",
      product: result,
    });
  } else {
    res.send({ code: 500, message: "Upload Err" });
  }
});
app.put("/update-sliders/:id", upload.array("products", 12), (req, res) => {
  // console.log(req.files);
  const _id = req.params.id;
  let temp_arr = [];
  for (let x of req.files) {
    temp_arr.push(x.path);
  }
  SliderModal.findByIdAndUpdate(
    _id,
    {
      images: temp_arr,
    },
    function (err, docs) {
      if (!err) {
        res.send({ code: 200, message: "Update Success" });
      } else {
        res.send({ code: 400, message: "Update Err" });
      }
    }
  );
});
app.get("/sliders", async (req, res) => {
  const data = await SliderModal.find();
  if (data) {
    res.send({ code: 200, sliders: data });
  } else {
    res.status(500).send("sliders not found");
  }
});
app.put("/update-product/:id", upload.array("products", 12), (req, res) => {
  // console.log(req.files);
  const _id = req.params.id;
  let temp_arr = [];
  for (let x of req.files) {
    temp_arr.push(x.path);
  }
  ProductModel.findByIdAndUpdate(
    _id,
    {
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      mrp: req.body.mrp,
      discount: req.body.discount,
      video: req.body.video,
      images: temp_arr,
      stock: req.body.stock,
      description: req.body.description,
      keywords: req.body.keywords,
    },
    function (err, docs) {
      if (!err) {
        res.send({ code: 200, message: "Update Success" });
      } else {
        res.send({ code: 400, message: "Update Err" });
      }
    }
  );
});
app.post("/addphoto", upload.array("products", 12), (req, res) => {
  let temp_arr = [];
  for (let x of req.files) {
    temp_arr.push(x.path);
  }

  const result = GalleryModal.create({
    photo: temp_arr,
    link: req.body.link,
  });
  if (result) {
    res.send({
      code: 200,
      message: "Gallery Images Upload Success",
      product: result,
    });
  } else {
    res.send({ code: 500, message: "Upload Err" });
  }
});
app.post("/addblog", upload.array("products", 12), (req, res) => {
  let temp_arr = [];
  for (let x of req.files) {
    temp_arr.push(x.path);
  }

  const result = BlogsModal.create({
    heading: req.body.heading,
    images: temp_arr,
    content: req.body.content,
  });
  if (result) {
    res.send({
      code: 200,
      message: "Blog is added successfully",
      product: result,
    });
  } else {
    res.send({ code: 500, message: "Upload Err" });
  }
});
app.put("/update-blog/:id", upload.array("products", 12), (req, res) => {
  const _id = req.params.id;
  let temp_arr = [];
  for (let x of req.files) {
    temp_arr.push(x.path);
  }
  BlogsModal.findByIdAndUpdate(
    _id,
    {
      heading: req.body.heading,
      images: temp_arr,
      content: req.body.content,
    },
    function (err, docs) {
      if (!err) {
        res.send({ code: 200, message: "Update Success" });
      } else {
        res.send({ code: 400, message: "Update Err" });
      }
    }
  );
});
app.post("/createcategory", upload.array("products", 12), (req, res) => {
  let temp_arr = [];
  for (let x of req.files) {
    temp_arr.push(x.path);
  }

  const result = categoryModal.create({
    category: req.body.category,
    subCategory: req.body.subCategory,
    photo: temp_arr,
  });
  if (result) {
    res.send({
      code: 200,
      message: "Catefory is Created Successfully",
      product: result,
    });
  } else {
    res.send({ code: 500, message: "Upload Err" });
  }
});
app.patch("/updatecategory/:id", upload.array("products", 12), (req, res) => {
  const _id = req.params.id;
  let temp_arr = [];
  for (let x of req.files) {
    temp_arr.push(x.path);
  }
  categoryModal.findByIdAndUpdate(
    _id,
    {
      category: req.body.category,
      subCategory: req.body.subCategory,
      photo: temp_arr,
    },
    function (err, docs) {
      if (!err) {
        res.send({ code: 200, message: "Update Success" });
      } else {
        res.send({ code: 400, message: "Update Err" });
      }
    }
  );
});
app.post("/createreview", upload.array("products", 12), (req, res) => {
  let temp_arr = [];
  for (let x of req.files) {
    temp_arr.push(x.path);
  }

  const result = ReviewModal.create({
    name: req.body.name,
    review: req.body.review,
    photos: temp_arr,
  });
  if (result) {
    res.send({
      code: 200,
      message: "Review  is Created Successfully",
      product: result,
    });
  } else {
    res.send({ code: 500, message: "Upload Err" });
  }
});
app.put("/update-review/:id", upload.array("products", 12), (req, res) => {
  const _id = req.params.id;
  let temp_arr = [];
  for (let x of req.files) {
    temp_arr.push(x.path);
  }
  ReviewModal.findByIdAndUpdate(
    _id,
    {
      name: req.body.name,
      review: req.body.review,
      photos: temp_arr,
    },
    function (err, docs) {
      if (!err) {
        res.send({ code: 200, message: "Update Success" });
      } else {
        res.send({ code: 400, message: "Update Err" });
      }
    }
  );
});
app.post("/add-aboutus", upload.array("products", 12), (req, res) => {
  let temp_arr = [];
  for (let x of req.files) {
    temp_arr.push(x.path);
  }

  const result = AboutModal.create({
    content: req.body.content,
    photos: temp_arr,
    heading: req.body.heading,
  });
  if (result) {
    res.send({
      code: 200,
      message: "AboutUs  is Created Successfully",
      product: result,
    });
  } else {
    res.send({ code: 500, message: "Err" });
  }
});
app.put("/update-aboutus/:id", upload.array("products", 12), (req, res) => {
  const _id = req.params.id;
  let temp_arr = [];
  for (let x of req.files) {
    temp_arr.push(x.path);
  }
  AboutModal.findByIdAndUpdate(
    _id,
    {
      content: req.body.content,
      photos: temp_arr,
      heading: req.body.heading,
    },
    function (err, docs) {
      if (!err) {
        res.send({ code: 200, message: "Update Success" });
      } else {
        res.send({ code: 400, message: "Update Err" });
      }
    }
  );
});
app.post("/send-sms", async (req, res) => {
  // console.log(req.body)
  const { mobile, otp } = req.body;
  const username = "mitsentertainment";
  const password = "7914862";
  const message = `Dear user OTP number is ${otp} Mits Group`;
  const sender = "MITSMJ";
  const type = 3;
  const templateId = "1507167263846753724";
  const url = `http://api.bulksmsgateway.in/sendmessage.php?user=${username}&password=${password}&mobile=${mobile}&message=${encodeURIComponent(
    message
  )}&sender=${sender}&type=${type}&template_id=${templateId}`;
  
  try {
    const response = await axios
      .post(url)
      .then((response) => {
        res.json({ response: response.data });
      })
      .catch((error) => {
        res.status(500).json({ message: error });
      });
  } catch (error) {
    res.send(error)
  }
});

app.use("/", userVarRoute);
app.use("/", userRoutes);
app.use("/", adminRoute);
app.use("/", cardRoutes);
app.use("/", contactRoute);
app.use("/", orderRoute);
app.use("/", couponRoute);
app.use("/", cancelfeedbackRoute);
app.use("/", categoryRoute);
app.use("/", videoRoute);
app.use("/", galleryRoute);
app.use("/", BlogsRoute);
app.use("/", ReviewRoute);
app.use("/", PrivacyRoute);
app.use("/", ReturnRoute);
app.use("/", TermsRoute);
app.use("/", AboutusRoute);
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
