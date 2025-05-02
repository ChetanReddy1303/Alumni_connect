// // /backend/student/routes/mentorshipRoutes.js

const express = require("express");
const router = express.Router();
const { sendRequest, viewRequests, cancelRequest } = require("../../controllers/student/mentorshipController");
const { protectStudent } = require("../../middleware/student/authMiddleware");

// Send a mentorship request
router.post("/", protectStudent, sendRequest);

// View all requests made by the student
router.get("/", protectStudent, viewRequests);

// Cancel a request
router.delete("/:id", protectStudent, cancelRequest);

module.exports = router;
