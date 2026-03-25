const mongoose = require('mongoose');

module.exports = mongoose.model('Mapping', {
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }
});