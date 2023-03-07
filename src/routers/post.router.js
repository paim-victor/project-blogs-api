const express = require('express');
const { validToken } = require('../middlewares/validToken');
const { postController } = require('../controllers');

const router = express.Router();

router.get('/', validToken, postController.getAll);

module.exports = router;