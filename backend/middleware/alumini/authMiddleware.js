// const jwt = require('jsonwebtoken');

// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     return res.status(401).json({ message: 'No token, authorization denied' });
//   }

//   const token = authHeader.split(' ')[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // decoded contains user id (from generateToken)
//     next();
//   } catch (err) {
//     return res.status(403).json({ message: 'Invalid or expired token' });
//   }
// };

// module.exports = authenticateToken;


const jwt = require('jsonwebtoken');
const User = require('../../models/alumini/User');
 // Adjust if path differs

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch user from DB
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    if (user.role !== 'alumni') {
      return res.status(403).json({ message: 'Access denied: Alumni only' });
    }

    req.user = user; // attach full user object
    next();
  } catch (err) {
    console.error('JWT Error:', err.message);
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

module.exports = authenticateToken;
