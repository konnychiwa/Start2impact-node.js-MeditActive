const express = require('express');
const router = express.Router();
const {
  postGoal,
  deleteGoal,
  getGoal,
  getGoals,
  updateGoal,
} = require('../controllers/goal.controller.js');

// add a Goal
router.post('/', postGoal);

// delete a Goal
router.delete('/:id', deleteGoal);

// see a Goal
router.get('/:id', getGoal);

// see all Goals
router.get('/', getGoals);

// update a Goal
router.put('/:id', updateGoal);

module.exports = router;
