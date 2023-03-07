const { Category } = require('../models');

const create = async (category) => Category.create(category);

const getAll = async () => Category.findAll();

const getById = async (categoryId) => {
  const idCategory = await categoryId.map((category) => 
    Category.findOne({ where: { id: category } }));
  const hasCategoryId = await Promise.all(idCategory);
  return hasCategoryId;
};

module.exports = {
  create,
  getAll,
  getById,
};