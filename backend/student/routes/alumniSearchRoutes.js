// /backend/student/routes/alumniSearchRoutes.js

const express = require("express");
const router = express.Router();
const { searchAlumni } = require("../controllers/alumniSearchController");
const { protectStudent } = require("../middleware/authMiddleware");

router.get("/", protectStudent, searchAlumni);

module.exports = router;
