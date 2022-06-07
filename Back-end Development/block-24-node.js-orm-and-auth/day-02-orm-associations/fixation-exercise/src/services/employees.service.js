const { Address, Employee } = require('../models');

function getAll() {
  return Employee.findAll({ include: { model: Address, as: 'addresses' } });
}

function getById(id, includeAddresses) {
  if (includeAddresses) {
    return Employee.findByPk(id, {
      include: { model: Address, as: 'addresses' },
    });
  }

  return Employee.findByPk(id);
}

module.exports = { getAll, getById };
