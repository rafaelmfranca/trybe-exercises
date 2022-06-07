const { Address, Employee } = require('../models');

function getAll() {
  return Employee.findAll({ include: { model: Address, as: 'addresses' } });
}

function getById(id) {
  return Employee.findByPk(id, {
    include: {
      model: Address,
      as: 'addresses',
      attributes: { exclude: ['number'] },
    },
  });
}

module.exports = { getAll, getById };
