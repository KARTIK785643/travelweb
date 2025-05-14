const express = require('express');
const router = express.Router();
const SpecialActivity = require('../models/SpecialActivity');

// Create activity
router.post('/', async (req, res) => {
  try {
    // Verify user exists
    const user = await User.findById(req.body.user);
    if (!user) {
      return res.status(400).send({ message: 'Invalid user ID' });
    }
    
    const activity = new SpecialActivity(req.body);
    await activity.save();
    res.status(201).send(activity);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
// Update activity
router.put('/:id', async (req, res) => {
  try {
    const activity = await SpecialActivity.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(activity);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;