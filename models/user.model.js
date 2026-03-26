// importing mongoose to define schema and model
const mongoose = require('mongoose');

// creating User model (this defines how user data is stored in database)
module.exports = mongoose.model('User', {

  // name of the user
  name: String,

  // email of the user (must be unique for each user)
  email: { type: String, unique: true },

  // password of the user (will be stored in hashed form)
  password: String

});