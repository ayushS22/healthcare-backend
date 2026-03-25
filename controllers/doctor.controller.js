const Doctor = require('../models/doctor.model');

// CREATE doctor
exports.createDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.status(201).json(doctor);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET all doctors
exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET doctor by ID
exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ msg: "Doctor not found" });

    res.json(doctor);
  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE doctor
exports.updateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(doctor);
  } catch (err) {
    res.status(500).json(err);
  }
};

// DELETE doctor
exports.deleteDoctor = async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);
    res.json({ msg: "Doctor deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};