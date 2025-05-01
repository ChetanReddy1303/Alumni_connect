// /backend/student/studentServer.js

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const mentorshipRoutes = require("./routes/mentorshipRoutes");
const alumniSearchRoutes = require("./routes/alumniSearchRoutes");
const opportunityRoutes = require("./routes/opportunityRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/student/auth", authRoutes);
app.use("/student/profile", profileRoutes);
app.use("/student/mentorships", mentorshipRoutes);
app.use("/student/search", alumniSearchRoutes);
app.use("/student/opportunities", opportunityRoutes);

// Root route (optional)
app.get("/", (req, res) => {
  res.send("Student Backend API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Student backend server running on port ${PORT}`);
});
