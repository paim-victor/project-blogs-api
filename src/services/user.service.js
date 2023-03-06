const { User } = require('../models');

const deletePassword = { attributes: { exclude: ['password'] } };

const getUsers = () => User.findAll(deletePassword);

const getUserId = (id) => User.findByPk(id, deletePassword);

const getEmail = (email) => User.findOne({ where: { email } });

const getPassword = (password) => User.findOne({ where: { password } });

const create = (user) => User.create(user);

const detroy = (id) => User.destroy({ where: { id } });

  module.exports = {
    getUsers,
    getUserId,
    getEmail,
    getPassword,
    create,
    detroy,
  };