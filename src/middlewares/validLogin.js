const validLoginBody = (email, password) => email && password;

const validLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!validLoginBody(email, password)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  return next();
};

module.exports = {
  validLogin,
};