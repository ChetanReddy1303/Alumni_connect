const mongoose = require('mongoose');

// Define the Mentorship schema
const mentorshipSchema = new mongoose.Schema({
  mentorId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  menteeId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['pending', 'accepted', 'rejected'], 
    default: 'pending' 
  },
}, { 
  timestamps: true 
});

// Create and export the Mentorship model
module.exports = mongoose.model('Mentorship', mentorshipSchema);
