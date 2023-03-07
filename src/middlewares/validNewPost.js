const validNewPost = (req, res, _next) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }
};

module.exports = {
  validNewPost,
};