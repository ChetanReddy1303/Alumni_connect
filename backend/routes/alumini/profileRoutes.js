const express = require('express');
const { getProfile, updateProfile } = require('../../controllers/alumini/profileController');
const router = express.Router();

// GET profile route (fetch the profile)
router.get('/', getProfile);

// PUT update profile route (update the profile)
router.put('/update', updateProfile);

module.exports = router;
