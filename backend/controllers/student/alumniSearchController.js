// /backend/student/controllers/alumniSearchController.js

const Alumni = require("../../models/alumini/User"); // Assuming Alumni model is here
// pavan changed this, this should be in alumini folder , but for now, we are keeping it in student folder....

// @desc    Search for alumni based on filters
// @route   GET /student/search?name=&expertise=
// @access  Private
const searchAlumni = async (req, res) => {
  const { name, expertise } = req.query;

  const query = {};

  if (name) {
    query.name = { $regex: name, $options: "i" }; // case-insensitive name match
  }

  if (expertise) {
    query.expertise = { $regex: expertise, $options: "i" };
  }

  try {
    const results = await Alumni.find(query).select("-password");
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { searchAlumni };
