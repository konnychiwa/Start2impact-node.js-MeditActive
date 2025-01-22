const express = require('express');
const router = express.Router();
const {
  postInterval,
  getIntervals,
  getInterval,
  updateInterval,
  deleteInterval,
  getDatesIntervals,
  getGoalInterval,
} = require('../controllers/interval.controller.js');

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
router.get('/', getDatesIntervals);

// get filtered Intervals by Goal
router.get('/goals', getGoalInterval);

module.exports = router;
