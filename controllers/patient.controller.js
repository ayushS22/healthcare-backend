const Patient = require('../models/patient.model');

exports.createPatient = async (req, res) => {
  const patient = await Patient.create({
    ...req.body,
    user: req.user.id
  });
  res.json(patient);
};

exports.getPatients = async (req, res) => {
  const patients = await Patient.find({ user: req.user.id });
  res.json(patients);
};

exports.getPatientById = async (req, res) => {
  const patient = await Patient.findById(req.params.id);
  res.json(patient);
};

exports.updatePatient = async (req, res) => {
  const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(patient);
};

exports.deletePatient = async (req, res) => {
  await Patient.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};