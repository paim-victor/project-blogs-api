const categoryService = require('../services/category.service');

const create = async (req, res) => {
  const bodyCat = req.body;
  const createdCat = await categoryService.create(bodyCat);
  return res.status(201).json(createdCat);
};

const getAll = async (_req, res) => {
  const categoryCat = await categoryService.getAll();
  return res.status(200).json(categoryCat);
};

module.exports = {
  getAll,
  create,
};