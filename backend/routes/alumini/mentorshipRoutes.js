const express = require('express');
const { requestMentorship, updateMentorshipStatus } = require('../../controllers/alumini/mentorshipController');
const router = express.Router();

// Route to create a mentorship request (POST)
router.post('/', requestMentorship);

// Route to update mentorship request status (PUT)
router.put('/:id', updateMentorshipStatus);

module.exports = router;
