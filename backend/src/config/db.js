const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
console.log("server");
const connectDB = async () => {
  try {
    
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Successfully Connected : ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;