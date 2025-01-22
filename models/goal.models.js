const mongoose = require('mongoose');

const GoalSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please enter a name for your goal'],
    },

    description: {
      type: String,
      required: false,
    },

    intervalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Interval',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Goal', GoalSchema);
