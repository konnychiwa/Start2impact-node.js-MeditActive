const Goal = require('../models/goal.models.js');
const Interval = require('../models/interval.models.js');

// add a Goal
const postGoal = async (req, res) => {
  const { title, description, intervalId } = req.body;
  try {
    const newGoal = new Goal({ title, description, _id });
    await newGoal.save();

    if (intervalId) {
      const interval = await Interval.findByIdAndUpdate(
        intervalId,
        { $addToSet: { goalId: newGoal._id } },
        { new: true }
      );

      if (!interval) {
        return res.status(404).json({ message: 'Interval not found' });
      }

      res.status(200).json({
        message: 'Goal created and associated with Interval',
        goal: newGoal,
        interval,
      });
    } else {
      res.status(201).json({
        message: 'Goal created without interval association',
        goal: newGoal,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all Goals
const getGoals = async (req, res) => {
  try {
    const goal = await Goal.find({});
    res.status(200).json(goal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// see a Goal
const getGoal = async (req, res) => {
  try {
    const { id } = req.params;
    const goal = await Goal.findById(id);
    res.status(200).json(goal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete a Goal
const deleteGoal = async (req, res) => {
  try {
    const { id } = req.params;
    const goal = await Goal.findByIdAndDelete(id);
    if (!goal) {
      return res.status(404).json({ message: 'Goal not found' });
    }

    res.status(200).json({ message: 'Goal deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update a goal
const updateGoal = async (req, res) => {
  try {
    const { id } = req.params;
    const goal = await Goal.findByIdAndUpdate(id, req.body);

    if (!goal) {
      return res.status(404).json({ message: 'Goal not found' });
    }

    const updatedGoal = await Goal.findById(id);
    res.status(200).json(updatedGoal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// associate a Goal to an Interval
const associateGoalInterval = async (req, res) => {
  const { intervalId } = req.params;
  const { goalId } = req.body;

  try {
    const goal = await Goal.findById(goalId);
    if (!goal) {
      return res.status(404).json({ message: 'Goal not found' });
    }

    const interval = await Interval.findByIdAndUpdate(
      intervalId,
      { $addToSet: { goalId: goalId } },
      { new: true }
    ).populate('goalId', 'title description');

    if (!interval) {
      return res.status(404).json({ message: 'Interval not found' });
    }

    res.status(200).json(interval);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  postGoal,
  getGoals,
  associateGoalInterval,
  deleteGoal,
  getGoal,
  updateGoal,
};
