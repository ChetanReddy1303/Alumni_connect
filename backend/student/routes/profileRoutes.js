// /backend/student/routes/profileRoutes.js

const express = require("express");
const router = express.Router();
const {
  getStudentProfile,
  updateStudentProfile,
} = require("../controllers/profileController");
const { protectStudent } = require("../middleware/authMiddleware");

// GET: Get logged-in student profile
router.get("/", protectStudent, getStudentProfile);

// PUT: Update logged-in student profile
router.put("/", protectStudent, updateStudentProfile);

module.exports = router;
