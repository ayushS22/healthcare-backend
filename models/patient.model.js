const mongoose = require('mongoose');
// this defines how doctor data will be stored in MongoDB
module.exports = mongoose.model('Patient', {
  name: String,
  age: Number,
  disease: String,
  // this links patient to a specific user (who created it)
  // ObjectId is used to store reference of another collection
  // ref: 'User' means it is connected to User model
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});