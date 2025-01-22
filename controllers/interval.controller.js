const User = require('../models/user.models.js');
const Interval = require('../models/interval.models.js');

// add an Interval
const postInterval = async (req, res) => {
  const { startDate, endDate, creatorId } = req.body;
  try {
    const creator = await User.findById(creatorId);
    if (!creator) {
      return res.status(404).json({ errore: 'The user is incorrect' });
    }
    const newInterval = new Interval({
      startDate,
      endDate,
      creatorId,
    });

    await newInterval.save();

    res.status(200).json({ newInterval });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all Intervals
const getIntervals = async (req, res) => {
  try {
    const interval = await Interval.find({});
    res.status(200).json(interval);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
/*
// get a User
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
*/

// update a User
/*
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
*/
// delete a User
/*
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
*/
module.exports = {
  postInterval,
  getIntervals,
};
