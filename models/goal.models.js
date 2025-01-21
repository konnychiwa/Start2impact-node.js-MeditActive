const mongoose = require('mongoose');

const GoalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },

    description: {
      type: String,
    },

    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

GoalSchema.pre('save', function (next) {
  if (this.startDate > this.endDate) {
    return next(
      new Error(
        'The starting date must be before or equal to the ending date of the goal'
      )
    );
  }
  next();
});

module.exports = mongoose.model('Goal', GoalSchema);
