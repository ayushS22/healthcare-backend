const router = require('express').Router();
const ctrl = require('../controllers/mapping.controller');

// assign doctor to patient
router.post('/', ctrl.assignDoctor);

// get all mappings
router.get('/', ctrl.getMappings);

// get doctors for specific patient
router.get('/:patient_id', ctrl.getDoctorsByPatient);

// delete mapping
router.delete('/:id', ctrl.deleteMapping);

module.exports = router;    