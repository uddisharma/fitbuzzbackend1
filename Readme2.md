const express = require('express')
const dotenv = require("dotenv");
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const multer = require('multer')
var path = require('path')
const ConnectDB= require('./config/connectdb.js')
const DATABASE_URL = process.env.DATABASE_URL;


ConnectDB("mongodb://127.0.0.1:27017")
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage });
// const upload = multer({ dest: 'uploads/' })

const app = express()
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))
const ProductModel = mongoose.model('prod', {
    category: { type: String },
    images: { type: Array, },
});
app.post('/image', upload.array('products', 12), (req, res) => {
  console.log(req.files)
 let temp_arr = []
  for(let x of req.files)
 {
  temp_arr.push(x.path)
 } 
 console.log(temp_arr)
    let result = ProductModel.create({
        category: req.body.category,
        images: temp_arr

    })
    if (result) {
        res.send({ code: 200, message: 'Upload Success' })
    } else {
        res.send({ code: 500, message: 'Upload Err' })
    }
})
app.get('/image', async (req, res) => {
    let products = await ProductModel.find({})
    if (products.length > 0) {
        res.send({ code: 200, data: products })
    } else {
        res.send({ code: 500, message: 'Server Err' })
    }
})