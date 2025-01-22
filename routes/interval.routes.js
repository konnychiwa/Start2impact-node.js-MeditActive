const express = require('express');
const router = express.Router();
const {
  postInterval,
  getIntervals,
} = require('../controllers/interval.controller.js');

// add an Interval
router.post('/', postInterval);

// get all Intervals
router.get('/', getIntervals);

// add a Goal to an Interval

module.exports = router;
