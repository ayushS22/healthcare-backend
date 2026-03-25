const router = require('express').Router();
const ctrl = require('../controllers/doctor.controller');

router.post('/', ctrl.createDoctor);
router.get('/', ctrl.getDoctors);
router.get('/:id', ctrl.getDoctorById);
router.put('/:id', ctrl.updateDoctor);
router.delete('/:id', ctrl.deleteDoctor);

module.exports = router;