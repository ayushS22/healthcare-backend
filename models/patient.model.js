// importing mongoose to create model and connect with MongoDB
const mongoose = require('mongoose');

// creating Patient model (this decides how patient data will look in database)
module.exports = mongoose.model('Patient', {

  // name of the patient
  name: String,

  // age of the patient
  age: Number,

  // disease or problem patient has
  disease: String,

  // this field stores the id of the user who created this patient
  // ObjectId means we are storing id (not normal string)
  // ref: 'User' connects this field to User collection
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

});