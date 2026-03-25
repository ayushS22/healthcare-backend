const mongoose = require('mongoose');

module.exports = mongoose.model('Patient', {
  name: String,
  age: Number,
  disease: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});