const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("../backend/src/config/db");
const port = process.env.PORT || 5000;
const app = express();
const cors = require("cors");
const nodemailer = require('nodemailer');

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const textRouter = require("../backend/src/routes/textRoutes");
app.use("/api/text", textRouter);
const userRouter = require("../backend/src/routes/userRoutes");
app.use("/api/user", userRouter);


app.listen(port, () => {

console.log(`Server running in port ${port}`);
});