const userService = require('../services/user.service');
const { createToken } = require('../utils/auth');

const login = async (req, res) => { 
  const { email, password } = req.body;
  const validEmail = await userService.getEmail(email);
  const validPassword = await userService.getPassword(password);

  if (!validEmail || !validPassword) return res.status(400).json({ message: 'Invalid fields' });  

  const token = createToken(validEmail);
  return res.status(200).json({ token });
};

module.exports = {
  login,
};