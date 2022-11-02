const express = require("express");
const router = express.Router();
// console.log("sample");
const {
  login,
  signup,
  sendEmailOTP,
  verifyOTP,
} = require("../controller/userControllers");

router.post("/login",login);
router.post("/signup",signup);
router.post("/sendEmailOTP/:otp",sendEmailOTP);
router.put("/verifyOTP",verifyOTP);

// router.get("/all", getChatByUserId);
// router.get("/:id", getChatById);
// router.patch("/approve/:id", deleteChat);
// router.patch("/:id", copyChat);
// router.delete("/:id", forwardChat);

module.exports = router;