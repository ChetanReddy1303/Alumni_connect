const express = require('express');
const { createOpportunity } = require('../../controllers/alumini/opportunityController');
const router = express.Router();

router.post('/', createOpportunity);

module.exports = router;
