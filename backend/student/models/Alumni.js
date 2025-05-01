const mongoose = require("mongoose");

const alumniSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    expertise: { type: String },
    bio: { type: String },
    role: { type: String, default: "alumni" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Alumni", alumniSchema);
