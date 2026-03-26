// 1. Import mongoose
const mongoose = require('mongoose');

// 2. Create a schema (structure of data)
const mappingSchema = new mongoose.Schema({
  
  // Patient ID (reference to Patient collection)
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient'
  },

  // Doctor ID (reference to Doctor collection)
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor'
  }

});

// 3. Create model using schema
const Mapping = mongoose.model('Mapping', mappingSchema);

// 4. Export model
module.exports = Mapping;