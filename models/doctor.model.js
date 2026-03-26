// 1. Import mongoose
const mongoose = require('mongoose');

// 2. Create schema (structure of Doctor data)
const doctorSchema = new mongoose.Schema({

  // Doctor name
  name: {
    type: String
  },

  // Doctor specialization (e.g., Cardiologist, Dentist)
  specialization: {
    type: String
  }

});

// 3. Create model using schema
const Doctor = mongoose.model('Doctor', doctorSchema);

// 4. Export model
module.exports = Doctor;