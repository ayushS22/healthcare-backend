const router = require('express').Router();
const auth = require('../middleware/auth');
const ctrl = require('../controllers/patient.controller');

router.post('/', auth, ctrl.createPatient);
router.get('/', auth, ctrl.getPatients);
router.get('/:id', auth, ctrl.getPatientById);
router.put('/:id', auth, ctrl.updatePatient);
router.delete('/:id', auth, ctrl.deletePatient);

module.exports = router;