const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// Create a schema for storing OTPs in the database
const otpSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true },
  otp: { type: String, required: true },
});

// Create a model based on the schema
const OTP = mongoose.model('OTP', otpSchema);

// Initialize Express.js app
const app = express();
app.use(express.json());

// Define a route to handle the OTP request
app.post('/send-otp', async (req, res) => {
  const { phoneNumber } = req.body;

  // Generate a random OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Store the OTP in the database
  const otpData = new OTP({ phoneNumber, otp });
  await otpData.save();

  // Send the OTP via the bulk SMS gateway
  const smsGatewayUrl = 'https://api.bulksmsgateway.com/send';
  const smsGatewayApiKey = 'YOUR_API_KEY';

  try {
    await axios.post(smsGatewayUrl, {
      api_key: smsGatewayApiKey,
      to: phoneNumber,
      message: `Your OTP is: ${otp}`,
    });

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ message: 'Failed to send OTP' });
  }
});

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost:27017/otp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // Start the Express.js server
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch((error) => {
    console.error('Failed to connect to database:', error);
  });
