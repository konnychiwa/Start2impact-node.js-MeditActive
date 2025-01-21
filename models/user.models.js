const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter user name'],
    },

    surname: {
      type: String,
      required: [true, 'Please enter user surname'],
    },

    email: {
      type: String,
      required: [true, 'Please enter user email'],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
