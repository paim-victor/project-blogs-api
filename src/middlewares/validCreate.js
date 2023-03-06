const joi = require('joi');

const validCreateUser = (body) => 
  joi.object({
    displayName: joi.string().min(8).required().messages({
      'string.min': '"displayName" length must be at least 8 characters long',
    }),
    email: joi.string().email().required().messages({
      'string.email': '"email" must be a valid email',
    }),
    password: joi.string().min(6).required().messages({
      'string.min': '"password" length must be at least 6 characters long',
    }),
    image: joi.string(),
  }).validate(body);

  const validCreate = async (req, res, next) => {
    const { error } = validCreateUser(req.body);

    if (error) return res.status(400).json({ message: error.details[0].message });

    next();
  };

  module.exports = {
    validCreate,
  };