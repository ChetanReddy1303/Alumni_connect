// /backend/student/routes/opportunityRoutes.js

const express = require("express");
const router = express.Router();
const { getOpportunities } = require("../controllers/opportunityController");
const { protectStudent } = require("../middleware/authMiddleware");

router.get("/", protectStudent, getOpportunities);

module.exports = router;
