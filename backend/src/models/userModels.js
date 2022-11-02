const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  
  userName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  otpVerified: {
    type: String,
    default: "0",
  },
password: {
    type: String,
    required: true,
  },
 
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  flag: {
    type: String,
    default: "0",
  },
});

module.exports = mongoose.model("user", userSchema);