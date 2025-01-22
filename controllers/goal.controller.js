const Goal = require('../models/goal.models.js');
const Interval = require('../models/interval.models.js');

// add an Interval
const postGoal = async (req, res) => {
  const { title, description, intervalId } = req.body;
  try {
    const interval = await Interval.findById(intervalId);
    if (!interval) {
      return res.status(404).json({ errore: 'The interval is incorrect' });
    }
    const newGoal = new Goal({
      title,
      description,
      intervalId,
    });

    await newGoal.save();

    res.status(200).json({ newGoal });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  postGoal,
};
