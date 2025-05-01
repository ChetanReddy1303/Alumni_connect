// /backend/student/models/MentorshipRequest.js

const mongoose = require("mongoose");

const mentorshipRequestSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    alumni: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Alumni", // Assume Alumni model exists
      required: true,
    },
    message: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "MentorshipRequest",
  mentorshipRequestSchema
);
