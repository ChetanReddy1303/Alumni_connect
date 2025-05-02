const Event = require('../../models/alumini/Event');

const createEvent = async (req, res) => {
  const { eventName, description, date } = req.body;
  try {
    const event = new Event({
      eventName,
      description,
      date,
      attendees: [req.user.id], // Add logged-in user as attendee
    });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ message: 'Error creating event' });
  }
};

module.exports = { createEvent };
