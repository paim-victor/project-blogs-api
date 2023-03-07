const joi = require('joi');

const valid = (body) =>
joi.object({
  name: joi.string().required().messages({
    'string.required': '"name" is required',
  }),
}).validate(body);

const validCategory = async (req, res, next) => {
  const { error } = valid(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};

module.exports = {
  validCategory,
};