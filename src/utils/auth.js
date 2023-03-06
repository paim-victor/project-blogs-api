const JWT = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const JWTConfig = {
  algorithm: 'HS256',
};

const createToken = (payload) => JWT.sign({ payload }, secret, JWTConfig);
const authToken = (token) => JWT.verify(token, secret);

module.exports = {
  createToken,
  authToken,
};