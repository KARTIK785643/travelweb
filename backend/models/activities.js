const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  dateRange: {
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  timeRange: {
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },
  type: {
    type: String,
    enum: ['All','INDOOR', 'OUTDOOR'], // You can extend this list as needed
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Base64 image data
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Activity', activitySchema);
