// 
const mongoose = require("mongoose");
const MentorshipRequest = require("../../models/student/MentorshipRequest");

// @desc    Send a mentorship request
// @route   POST /student/mentorships
// @access  Private
const sendRequest = async (req, res) => {
  const { alumniId, message } = req.body;

  try {
    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(alumniId)) {
      return res.status(400).json({ message: "Invalid alumni ID" });
    }

    // Check if already requested
    const alreadyRequested = await MentorshipRequest.findOne({
      student: req.user._id,
      alumni: alumniId,
    });

    if (alreadyRequested) {
      return res.status(400).json({ message: "Mentorship request already sent" });
    }

    // Create new mentorship request
    const request = await MentorshipRequest.create({
      student: req.user._id,
      alumni: alumniId,
      message,
      status: "pending",
    });

    res.status(201).json(request);
  } catch (err) {
    console.error("❌ Error sending mentorship request:", err.message);
    res.status(500).json({ message: "Server error while sending request" });
  }
};

// @desc    View all mentorship requests made by student
// @route   GET /student/mentorships
// @access  Private
const viewRequests = async (req, res) => {
  try {
    const requests = await MentorshipRequest.find({ student: req.user._id })
      .populate("Alumni", "name email educationFields")
      .sort({ createdAt: -1 });

    res.json(requests);
  } catch (err) {
    console.error("❌ Error fetching mentorship requests:", err.message);
    res.status(500).json({ message: "Server error while fetching requests" });
  }
};

// @desc    Cancel a mentorship request
// @route   DELETE /student/mentorships/:id
// @access  Private
const cancelRequest = async (req, res) => {
  try {
    const request = await MentorshipRequest.findById(req.params.id);

    if (!request) {
      return res.status(404).json({ message: "Mentorship request not found" });
    }

    if (request.student.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to cancel this request" });
    }

    await request.deleteOne();
    res.json({ message: "Mentorship request cancelled successfully" });
  } catch (err) {
    console.error("❌ Error cancelling mentorship request:", err.message);
    res.status(500).json({ message: "Server error while cancelling request" });
  }
};

module.exports = {
  sendRequest,
  viewRequests,
  cancelRequest,
};


