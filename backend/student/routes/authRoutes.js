// /backend/student/routes/authRoutes.js

const express = require("express");
const router = express.Router();
const {
  registerStudent,
  loginStudent,
} = require("../controllers/authController");

// @route   POST /api/student/signup
router.post("/signup", registerStudent);

// @route   POST /api/student/login
router.post("/login", loginStudent);

module.exports = router;
