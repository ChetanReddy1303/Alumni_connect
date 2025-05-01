const mongoose = require("mongoose");

const opportunitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, enum: ["Job", "Internship"], required: true },
    description: { type: String },
    company: { type: String },
    location: { type: String },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Alumni" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Opportunity", opportunitySchema);
