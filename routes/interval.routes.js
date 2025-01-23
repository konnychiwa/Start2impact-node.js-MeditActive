const express = require('express');
const router = express.Router();
const {
  postInterval,
  getIntervals,
  getInterval,
  updateInterval,
  deleteInterval,
} = require('../controllers/interval.controller.js');

const { associateGoalInterval } = require('../controllers/goal.controller.js');

// add an Interval
router.post('/', postInterval);

// get all Intervals
router.get('/', getIntervals);

// get an Interval
router.get('/:id', getInterval);

// update an Interval
router.put('/:id', updateInterval);

// delete an Interval
router.delete('/:id', deleteInterval);

// get filtered Interval by Date
router.get('/filter', getInterval);

// associate Goal to Interval
router.patch('/:intervalId/goals', associateGoalInterval);

module.exports = router;
