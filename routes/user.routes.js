const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUser,
  postUser,
  updateUser,
  deleteUser,
  getUserIntervals,
} = require('../controllers/user.controller.js');

// get all Users
router.get('/', getUsers);

// get a User
router.get('/:id', getUser);

// add a User
router.post('/', postUser);

// update a User
router.put('/:id', updateUser);

// delete a User
router.delete('/:id', deleteUser);

// se User Intervals
router.get('/:id/intervals', getUserIntervals);

module.exports = router;
