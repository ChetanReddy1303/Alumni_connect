// /backend/student/routes/mentorshipRoutes.js

const express = require("express");
const router = express.Router();
const {
  sendRequest,
  viewRequests,
  cancelRequest,
} = require("../controllers/mentorshipController");
const { protectStudent } = require("../middleware/authMiddleware");

// Send a mentorship request
router.post("/", protectStudent, sendRequest);

// View all requests by student
router.get("/", protectStudent, viewRequests);

// Cancel a request
router.delete("/:id", protectStudent, cancelRequest);

module.exports = router;
