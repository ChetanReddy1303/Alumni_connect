const User = require('../../models/alumini/User');
const generateToken = require('../../utils/generateToken');

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = new User({ name, email, password });
  await user.save();

  const token = generateToken(user._id);
  res.status(201).json({ token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = generateToken(user._id);
  res.json({ token });
};

module.exports = { register, login };
