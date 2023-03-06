const { authToken } = require('../utils/auth');

const validToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).send({ message: 'Token not found' });
    }

    req.payload = authToken(authorization);

    next();
  } catch (error) {
    return res.status(401).send({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validToken,
};