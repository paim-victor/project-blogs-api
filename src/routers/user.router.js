const express = require('express');
const { validCreate } = require('../middlewares/validCreate');
const { validToken } = require('../middlewares/validToken');

const { userController } = require('../controllers');

const router = express.Router();

router.get('/', validToken, userController.getUsers);
router.get('/:id', validToken, userController.getUserId);
router.post('/', validCreate, userController.create);
router.delete('/me', validToken, userController.destroy);

module.exports = router;