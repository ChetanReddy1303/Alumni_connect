const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ====== STUDENT ROUTES ======
const studentAuthRoutes = require("./routes/student/authRoutes");
const studentProfileRoutes = require("./routes/student/profileRoutes");
const studentMentorshipRoutes = require("./routes/student/mentorshipRoutes");
const studentAlumniSearchRoutes = require("./routes/student/alumniSearchRoutes");

app.use("/api/student/auth", studentAuthRoutes);
app.use("/api/student/profile", studentProfileRoutes);
app.use("/api/student/mentorships", studentMentorshipRoutes);
app.use("/api/student/search", studentAlumniSearchRoutes);

// ====== ALUMINI ROUTES ======
const aluminiAuthRoutes = require("./routes/alumini/authRoutes");
const aluminiProfileRoutes = require("./routes/alumini/profileRoutes");
const aluminiMentorshipRoutes = require("./routes/alumini/mentorshipRoutes");
const aluminiOpportunityRoutes = require("./routes/alumini/opportunityRoutes");
const aluminiEventRoutes = require("./routes/alumini/eventRoutes");

const authenticateAlumini = require("./middleware/alumini/authMiddleware");

app.use("/api/alumini/auth", aluminiAuthRoutes);
app.use("/api/alumini/profile", authenticateAlumini, aluminiProfileRoutes);
app.use("/api/alumini/mentorships", authenticateAlumini, aluminiMentorshipRoutes);
app.use("/api/alumini/opportunities", authenticateAlumini, aluminiOpportunityRoutes);
app.use("/api/alumini/events", authenticateAlumini, aluminiEventRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("🎓 Alumini Connect Backend API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

