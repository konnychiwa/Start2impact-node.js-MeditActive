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

// See all Intervals or filter by Date
const getIntervals = async (req, res) => {
  const { startDate, endDate } = req.query;

  try {
    const filter = {};

    if (startDate) {
      filter.startDate = { $gte: new Date(startDate) };
    }
    if (endDate) {
      filter.endDate = { $lte: new Date(endDate) };
    }

    const intervals = await Interval.find(filter).populate(
      'creatorId',
      'name surname email'
    );

    res.status(200).json(intervals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getIntervals };

// See an Interval
const getInterval = async (req, res) => {
  try {
    const { id } = req.params;
    const interval = await Interval.findById(id).populate(
      'creatorId',
      'name surname email'
    );
    res.status(200).json(interval);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update an Interval
const updateInterval = async (req, res) => {
  try {
    const { id } = req.params;
    const interval = await Interval.findByIdAndUpdate(id, req.body);

    if (!interval) {
      return res.status(404).json({ message: 'Interval not found' });
    }

    const updatedInterval = await Interval.findById(id);
    res.status(200).json(updatedInterval);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete an Interval
const deleteInterval = async (req, res) => {
  try {
    const { id } = req.params;
    const interval = await Interval.findByIdAndDelete(id);
    if (!interval) {
      return res.status(404).json({ message: 'Interval not found' });
    }

    res.status(200).json({ message: 'Interval deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  postInterval,
  getIntervals,
  getInterval,
  updateInterval,
  deleteInterval,
};
