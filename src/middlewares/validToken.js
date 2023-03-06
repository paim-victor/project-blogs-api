const { authToken } = require('../utils/auth');

const validToken = (req, res, next) => {
  try {
    const { checkingToken } = req.headers;

    if (!checkingToken) {
      return res.status(401).send({ message: 'Token not found ' });
    }

    req.payload = authToken(checkingToken);

    next();
  } catch (error) {
    return res.status(401).send({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validToken,
};