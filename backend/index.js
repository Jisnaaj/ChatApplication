const express = require("express");
const dotenv = require("dotenv").config();


const app = express();
const cors = require ('cors');
const mongoose = require ("mongoose");


const connectDB = require("./models/db");
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();



// const msgRouter = require("../backend/src/routes/msgRoutes");
// app.use("/api/msg", msgRouter);
const userRouter = require("../backend/routes/userRouter");
app.use("/api/user", userRouter);

app.listen(port, () => {console.log(`Server running in port ${port}`);
});