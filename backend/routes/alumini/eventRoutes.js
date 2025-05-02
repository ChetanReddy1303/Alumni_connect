const express = require('express');
const { createEvent } = require('../../controllers/alumini/eventController');
const router = express.Router();

router.post('/', createEvent);

module.exports = router;
