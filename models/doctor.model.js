const mongoose = require('mongoose');// importing mongoose to define schema and model

module.exports = mongoose.model('Doctor', {
  name: String,
  specialization: String
});