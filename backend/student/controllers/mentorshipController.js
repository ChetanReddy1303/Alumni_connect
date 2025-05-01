// /backend/student/controllers/mentorshipController.js

const MentorshipRequest = require("../models/MentorshipRequest");

// @desc    Send a mentorship request
// @route   POST /student/mentorships
// @access  Private
const sendRequest = async (req, res) => {
  const { alumniId, message } = req.body;

  try {
    const alreadyRequested = await MentorshipRequest.findOne({
      student: req.user._id,
      alumni: alumniId,
    });

    if (alreadyRequested) {
      return res.status(400).json({ message: "Request already sent" });
    }

    const request = await MentorshipRequest.create({
      student: req.user._id,
      alumni: alumniId,
      message,
      status: "pending",
    });

    res.status(201).json(request);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    View all mentorship requests made by student
// @route   GET /student/mentorships
// @access  Private
const viewRequests = async (req, res) => {
  try {
    const requests = await MentorshipRequest.find({ student: req.user._id })
      .populate("alumni", "name email expertise")
      .sort({ createdAt: -1 });

    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Cancel a mentorship request
// @route   DELETE /student/mentorships/:id
// @access  Private
const cancelRequest = async (req, res) => {
  try {
    const request = await MentorshipRequest.findById(req.params.id);

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    if (request.student.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await request.deleteOne();
    res.json({ message: "Request cancelled successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  sendRequest,
  viewRequests,
  cancelRequest,
};
