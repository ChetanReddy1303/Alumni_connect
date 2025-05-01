// /backend/student/controllers/opportunityController.js

const Opportunity = require("../models/Opportunity"); // assuming the model is stored in alumni backend
// pavan changed this one , this should be in alumini backend oppurtunities....

// @desc    Get all job/internship opportunities
// @route   GET /student/opportunities
// @access  Private
const getOpportunities = async (req, res) => {
  try {
    const opportunities = await Opportunity.find().sort({ createdAt: -1 });
    res.json(opportunities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching opportunities" });
  }
};

module.exports = { getOpportunities };
