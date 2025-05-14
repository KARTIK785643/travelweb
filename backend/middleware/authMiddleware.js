const jwt = require('jsonwebtoken');
const User = require('../models/userModel.js');

// normal user middleware
const userMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return res.status(401).json({ message: 'Invalid Token' });
    }
    const decoded = jwt.verify(token, 'travelsecret');
    req.user = decoded.id;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'Invalid Token' });
  }
};

// admin middleware
const adminMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return res.status(401).json({ message: 'Invalid Token' });
    }
    const decoded = jwt.verify(token, 'travelsecret');
    const user = await User.findById(decoded.id, { isAdmin: 1 });
    console.log(user);
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    if (!user.isAdmin) {
      return res.status(403).json({ message: 'Access denied' });
    }
    req.user = decoded.id;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'Invalid Token' });
  }
};

// activity organizer middleware
const organizerMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return res.status(401).json({ message: 'Invalid Token' });
    }

    // Directly verify the token
    const decoded = jwt.verify(token, 'travelsecret');
    
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ message: 'User not found' });
    if (user.type !== 'eventOrganizer') {
      return res.status(403).json({ message: 'Access denied' });
    }
    
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: err.message || 'Unauthorized' });
  }
};

module.exports = {
  userMiddleware,
  adminMiddleware,
  organizerMiddleware,
};
