const { Op } = require('sequelize');
const { Surgeries } = require('../models');

module.exports = {
  getAllByDoctor: (name) => {
    return Surgeries.findAll({ where: { doctor: { [Op.like]: `%${name}%` } } });
  },
};
