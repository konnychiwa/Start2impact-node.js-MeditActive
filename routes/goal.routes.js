const express = require('express');
const router = express.Router();
const { postGoal } = require('../controllers/goal.controller.js');

// add a User
router.post('/', postGoal);

module.exports = router;
