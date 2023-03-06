const express = require('express');

const router = express.Router();

const { loginController } = require('../controllers');
const { validLogin } = require('../middlewares/validLogin');

router.post('/', validLogin, loginController.login);

module.exports = router;