// /backend/student/middleware/authMiddleware.js

const jwt = require("jsonwebtoken");
const Student = require("../../models/student/Student");

const protectStudent = async (req, res, next) => {
  let token;

  // Check for token in Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Extract token

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach student info (excluding password) to req.user
      req.user = await Student.findById(decoded.id).select("-password");

      next(); // Proceed to controller
    } catch (error) {
      console.error("JWT Verification Error:", error);
      return res.status(401).json({ message: "Not authorized, invalid token" });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = { protectStudent };


