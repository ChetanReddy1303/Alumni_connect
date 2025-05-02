// 
const Opportunity = require('../../models/alumini/Opportunity');

const createOpportunity = async (req, res) => {
  const { title, type, description, location } = req.body;

  // Validate required fields
  if (!title || !type || !location) {
    return res.status(400).json({ message: 'Title, type, and location are required' });
  }

  try {
    const opportunity = new Opportunity({
      title,
      type,          // Add type field
      description,
      location,
      postedBy: req.user.id, // Add logged-in user as the poster
    });

    await opportunity.save(); // Save the opportunity to DB
    res.status(201).json(opportunity); // Send the created opportunity in response
  } catch (err) {
    console.error('Error creating opportunity:', err);
    res.status(500).json({ message: 'Error creating opportunity' });
  }
};

module.exports = { createOpportunity };
