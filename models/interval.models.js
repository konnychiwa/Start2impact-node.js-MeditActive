const mongoose = require('mongoose');

const IntervalScehma = mongoose.Schema(
  {
    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
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

IntervalScehma.pre('save', function (next) {
  if (this.startDate > this.endDate) {
    return next(
      new Error(
        'The starting date must be before or equal to the ending date of the interval'
      )
    );
  }
  next();
});

module.exports = mongoose.model('Interval', IntervalScehma);
