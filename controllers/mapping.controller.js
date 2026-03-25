const Mapping = require('../models/mapping.model');
const Patient = require('../models/patient.model');
const Doctor = require('../models/doctor.model');

// ASSIGN doctor to patient
exports.assignDoctor = async (req, res) => {
  try {
    const { patient, doctor } = req.body;

    // check if patient exists
    const patientExist = await Patient.findById(patient);
    if (!patientExist) {
      return res.status(404).json({ msg: "Patient not found" });
    }

    // check if doctor exists
    const doctorExist = await Doctor.findById(doctor);
    if (!doctorExist) {
      return res.status(404).json({ msg: "Doctor not found" });
    }

    const mapping = await Mapping.create({ patient, doctor });

    res.status(201).json(mapping);
  } catch (err) {
    res.status(500).json(err);
  }
};



// GET all mappings (with populate)
exports.getMappings = async (req, res) => {
  try {
    const data = await Mapping.find()
      .populate('patient')
      .populate('doctor');

    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};



// GET doctors assigned to a specific patient
exports.getDoctorsByPatient = async (req, res) => {
  try {
    const data = await Mapping.find({ patient: req.params.patient_id })
      .populate('doctor');

    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};



// REMOVE doctor from patient
exports.deleteMapping = async (req, res) => {
  try {
    await Mapping.findByIdAndDelete(req.params.id);
    res.json({ msg: "Mapping removed" });
  } catch (err) {
    res.status(500).json(err);
  }
};