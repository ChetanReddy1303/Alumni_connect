const mongoose = require('mongoose');
const Mentorship = require('../../models/alumini/Mentorship'); // Adjust the path as necessary

const requestMentorship = async (req, res) => {
  try {
    const { mentorId, menteeId } = req.body;

    // Check if the mentorId and menteeId are valid ObjectId strings
    if (!mongoose.Types.ObjectId.isValid(mentorId) || !mongoose.Types.ObjectId.isValid(menteeId)) {
      return res.status(400).json({ message: 'Invalid mentorId or menteeId' });
    }

    // Create new ObjectId instances using 'new'
    const mentorObjectId = new mongoose.Types.ObjectId(mentorId);
    const menteeObjectId = new mongoose.Types.ObjectId(menteeId);

    const mentorshipRequest = new Mentorship({
      mentorId: mentorObjectId,
      menteeId: menteeObjectId,
      status: 'pending',
    });

    await mentorshipRequest.save();
    res.status(201).json(mentorshipRequest);
  } catch (err) {
    console.error('Error creating mentorship request:', err);  // Log the exact error message
    res.status(500).json({ message: 'Error creating mentorship request', error: err.message });
  }
};

const updateMentorshipStatus = async (req, res) => {
  const { status } = req.body;  // Get the status from the request body
  try {
    // Find the mentorship request by its ID
    const mentorshipRequest = await Mentorship.findById(req.params.id);

    // Check if the mentorship request exists
    if (!mentorshipRequest) {
      return res.status(404).json({ message: 'Mentorship request not found' });
    }

    // Validate if the status is one of the allowed values
    const validStatuses = ['pending', 'accepted', 'rejected'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    // Update the status of the mentorship request
    mentorshipRequest.status = status;

    // Save the updated mentorship request to the database
    await mentorshipRequest.save();

    // Return the updated mentorship request as a response
    res.json(mentorshipRequest);
  } catch (err) {
    console.error('Error updating mentorship status:', err);  // Log the exact error
    res.status(500).json({ message: 'Error updating mentorship status', error: err.message });
  }
};


module.exports = { requestMentorship, updateMentorshipStatus };
