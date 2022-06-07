const { StatusCodes } = require('http-status-codes');
const employeesService = require('../services/employees.service');

async function getAll(_req, res, next) {
  try {
    const employees = await employeesService.getAll();
    return res.status(StatusCodes.OK).json(employees);
  } catch (err) {
    return next(err);
  }
}

module.exports = { getAll };
