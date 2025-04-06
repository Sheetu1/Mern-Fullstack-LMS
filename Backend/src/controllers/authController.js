const User = require("../../src/models/usermodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/config");
const sendEmail = require("../utils/sendEmail");

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, config.SECRET_KEY, { expiresIn: "7d" });
};

// ✅ Signup with OTP
exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if user exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists!" });

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    const otpExpires = Date.now() + 2 * 60 * 1000; // 2 min expiry

    // Create user with OTP
    user = new User({ name, email, password, role, otp, otpExpires });
    await user.save();

    await sendEmail({to: email, subject: "CourseCamp OTP Verification", text: `Your OTP is: ${otp}`})

    res.status(201).json({ message: "OTP sent to email. Verify to complete signup." });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Verify OTP & Activate Account
exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid or expired OTP!" });

    if(Date.now() > user.otpExpires){
        return res.status(400).json({
            message: "OTP is expired"
        })
    }

    if(otp !== user.otp){
        return res.status(400).json({
            message: "Invalid OTP"
        })
    }

    // Remove OTP after verification
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    const token = generateToken(user);
    res.json({ message: "Signup successful!", token });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Incorrect password!" });

    const token = generateToken(user);
    res.json({ message: "Login successful!", token });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get Current User
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
