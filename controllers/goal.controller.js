const User = require('../models/user.models.js');
const Goal = require('../models/goal.models.js');

// get all Users
/*
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
// add a Goal
const postGoal = async (req, res) => {
  const { name, description, startDate, endDate, creatorId } = req.body;
  try {
    const creator = await User.findById(creatorId);
    if (!creator) {
      return res.status(404).json({ errore: 'The user is incorrect' });
    }
    const newGoal = new Goal({
      name,
      description,
      startDate,
      endDate,
      creatorId: creator._id,
    });

    await newGoal.save();

    res.status(200).json({ newGoal });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
  postGoal,
};
