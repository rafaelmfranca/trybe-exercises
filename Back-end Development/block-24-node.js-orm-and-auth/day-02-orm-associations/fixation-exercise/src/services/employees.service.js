const { Address, Employee } = require('../models');

function getAll() {
  return Employee.findAll({ include: { model: Address, as: 'addresses' } });
}

module.exports = { getAll };
