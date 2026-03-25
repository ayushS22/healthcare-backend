const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const exist = await User.findOne({ email });
  if (exist) return res.status(400).json({ msg: "User exists" });

  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: hash });

  res.json(user);
};

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(404).json({ msg: "User not found" });

  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) return res.status(401).json({ msg: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({ token });
};