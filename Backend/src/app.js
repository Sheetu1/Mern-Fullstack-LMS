
const express = require("express");
const cors = require("cors");
const app = express();
const authRoutes = require('./routes/authRoutes');

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

module.exports = app;







































// CourseCamp-Backend/
// │── config/
// │   ├── db.js              # MongoDB Connection
// │   ├── default.json       # Configurations (PORT, MONGO_URI, JWT_SECRET, etc.)
// │── models/
// │   ├── User.js            # User Model
// │   ├── Course.js          # Course Model
// │   ├── Module.js          # Course Module Model
// │   ├── Lesson.js          # Course Lesson Model
// │── routes/
// │   ├── authRoutes.js      # User Authentication
// │   ├── userRoutes.js      # User Profile & Dashboard
// │   ├── courseRoutes.js    # Course Management
// │   ├── paymentRoutes.js   # Payment Integration
// │── controllers/
// │   ├── authController.js  # Auth Functions (Signup, Login, OTP)
// │   ├── userController.js  # User-related functions
// │   ├── courseController.js # Course Management Functions
// │   ├── paymentController.js # Payment Functions
// │── middleware/
// │   ├── authMiddleware.js  # JWT Auth Middleware
// │   ├── roleMiddleware.js  # Role-based Access Control
// │── utils/
// │   ├── emailService.js    # OTP & Email Sending
// │── .env                   # Environment Variables
// │── app.js                 # Express App Config
// │── server.js              # Server Entry Point
// │── package.json           # Dependencies
// │── README.md              # Project Documentation
