const express = require('express');
const categoryController = require('../controllers/category.controller');
const { validCategory } = require('../middlewares/validCategory');
const { validToken } = require('../middlewares/validToken');

const router = express.Router();

router.post('/', validToken, validCategory, categoryController.create);
router.get('/', validToken, categoryController.getAll);

module.exports = router;