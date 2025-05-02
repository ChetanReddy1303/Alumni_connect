// /backend/student/routes/alumniSearchRoutes.js

const express = require("express");
const router = express.Router();
const { searchAlumni } = require("../../controllers/student/alumniSearchController");
const { protectStudent } = require("../../middleware/student/authMiddleware");

router.get("/", protectStudent, searchAlumni);

module.exports = router;
