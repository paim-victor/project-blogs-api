const { getAllPost } = require('../services/post.service');

const getAll = async (_req, res) => {
  const allPosts = await getAllPost();
  return res.status(200).json(allPosts);
};

module.exports = { getAll };