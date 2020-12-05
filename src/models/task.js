const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  _id: {
    type: String,
  },
});

module.exports = Task;
