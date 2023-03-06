const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = (payload) => {
  jwt.sign(payload, JWT_SECRET, {
    expiresIn: '2d',
    algorithm: 'HS256',
  });
};