// /backend/student/models/Student.js

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minlength: 6,
    },
    department: String,
    graduationYear: Number,
    skills: [String],
  },
  { timestamps: true }
);

// Hash password before saving
studentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to match password
studentSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Method to generate JWT token
studentSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id, role: "student" }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = mongoose.model("Student", studentSchema);
