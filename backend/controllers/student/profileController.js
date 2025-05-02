// /backend/student/controllers/profileController.js

const Student = require("../../models/student/Student");

// @desc    Get student profile
// @route   GET /student/profile
// @access  Private
const getStudentProfile = async (req, res) => {
  try {
    const student = await Student.findById(req.user._id).select("-password");
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Update student profile
// @route   PUT /student/profile
// @access  Private
const updateStudentProfile = async (req, res) => {
  try {
    const student = await Student.findById(req.user._id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Update allowed fields
    student.name = req.body.name || student.name;
    student.email = req.body.email || student.email;
    student.branch = req.body.branch || student.branch;
    student.year = req.body.year || student.year;

    const updatedStudent = await student.save();
    res.json({
      _id: updatedStudent._id,
      name: updatedStudent.name,
      email: updatedStudent.email,
      branch: updatedStudent.branch,
      year: updatedStudent.year,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getStudentProfile,
  updateStudentProfile,
};
