// /backend/student/controllers/authController.js

const Student = require("../../models/student/Student");

// @desc    Register a new student
// @route   POST /api/student/signup
// @access  Public
const registerStudent = async (req, res) => {
  try {
    const { name, email, password, department, graduationYear, skills } = req.body;

    // Check if student already exists
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: "Student already exists" });
    }

    // Create student
    const student = await Student.create({
      name,
      email,
      password,
      department,
      graduationYear,
      skills,
    });

    // Generate token
    const token = student.generateToken();

    res.status(201).json({
      _id: student._id,
      name: student.name,
      email: student.email,
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// @desc    Login student
// @route   POST /api/student/login
// @access  Public
const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;

    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await student.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = student.generateToken();

    res.json({
      _id: student._id,
      name: student.name,
      email: student.email,
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { registerStudent, loginStudent };


