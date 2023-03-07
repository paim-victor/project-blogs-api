const { BlogPost, User, Category } = require('../models');

const getAllPost = async () => {
  const data = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category, as: 'categories' },
    ],
  });
  if (!data) {
    return { message: 'Error' };
  }
  return data;
};

module.exports = { getAllPost };