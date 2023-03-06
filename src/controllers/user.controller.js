const { userService } = require('../services');
const { createToken } = require('../utils/auth');

const getUsers = async (_req, res) => {
  const users = await userService.getUsers();

  return res.status(200).json(users);
};

const getUserId = async (req, res) => {
  const { id } = req.params;

  const user = await userService.getUserId(id);

  if (!user) return res.status(404).json({ message: 'User does not exist' });

  return res.status(200).json(user);
};

const create = async (req, res) => {
  const user = req.body;

  const emailCheck = await userService.getEmail(user.email);

  if (emailCheck) {
    return res.status(409).json({ message: 'User already registered' });
  }

const newUser = await userService.create(user);

const newToken = createToken(newUser);

return res.status(201).json({ newToken });
};

const destroy = async (req, res) => {
  const { id } = req.payload.payload;

  await userService.detroy(id);

  return res.status(204).end();
};

module.exports = {
  getUsers,
  getUserId,
  create,
  destroy,
};