// 
const mongoose = require("mongoose");

const opportunitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, enum: ["Job", "Internship"], required: true }, // Ensure this field is populated
    description: { type: String },
    company: { type: String },
    location: { type: String },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Alumni" },
  },
  { timestamps: true }
);

// Fix OverwriteModelError:
const Opportunity = mongoose.models.Opportunity || mongoose.model("Opportunity", opportunitySchema);

module.exports = Opportunity;
