const JWT = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = (payload) => {
  JWT.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
    algorithm: 'HS256',
  });
};