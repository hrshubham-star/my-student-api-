const express = require('express');
const controller = require('../controllers/studentController');
const { validateStudent, validateId } = require('../middleware/validateStudent');

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', validateId, controller.getOne);
router.post('/', validateStudent, controller.create);
router.put('/:id', validateId, validateStudent, controller.update);
router.delete('/:id', validateId, controller.remove);

module.exports = router;
