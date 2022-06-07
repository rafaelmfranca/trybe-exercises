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

async function getById(req, res, next) {
  try {
    const employee = await employeesService.getById(req.params.id);

    if (!employee) {
      return next({
        status: StatusCodes.NOT_FOUND,
        message: 'Employee not found',
      });
    }

    return res.status(StatusCodes.OK).json(employee);
  } catch (err) {
    return next(err);
  }
}

module.exports = { getAll, getById };
