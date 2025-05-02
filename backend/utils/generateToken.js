const jwt = require("jsonwebtoken");

// Generates JWT token for a student
const generateToken = (id, role = "student") => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "30d", // token will expire in 30 days
  });
};

module.exports = generateToken;
