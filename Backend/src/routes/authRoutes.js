const express = require("express");
const { signup, verifyOtp, login, getMe } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);         // Signup with OTP
router.post("/verify-otp", verifyOtp);  // Verify OTP
router.post("/login", login);           // Login
router.get("/me", protect, getMe);      // Get Current User

module.exports = router;
