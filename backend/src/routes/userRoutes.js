const express = require("express");
const router = express.Router();
// console.log("sample");
const {
  login,
  signup,
  sendOTP,
  getUserById,
  verifyOTP,
  savename,
  checkName
} = require("../controller/userControllers");

router.post("/login",login);
router.post("/signup/:otp",signup);
router.post("/sendOTP/:otp",sendOTP);
router.get("/getUserById/:userId",getUserById);
router.put("/verifyOTP",verifyOTP);
router.post('/username', signup);
router.put("/savename/:userId",savename);
router.get("/checkName/:name",checkName);

// router.get("/all", getChatByUserId);
// router.get("/:id", getChatById);
// router.patch("/approve/:id", deleteChat);
// router.patch("/:id", copyChat);
// router.delete("/:id", forwardChat);

module.exports = router;