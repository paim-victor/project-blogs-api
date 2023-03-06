const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

const jwtConfig = {
  algorithm: 'HS256',
};

const createToken = (payload) => jwt.sign({ payload }, secretKey, jwtConfig);
const authToken = (token) => jwt.verify(token, secretKey);

module.exports = {
  createToken,
  authToken,
};