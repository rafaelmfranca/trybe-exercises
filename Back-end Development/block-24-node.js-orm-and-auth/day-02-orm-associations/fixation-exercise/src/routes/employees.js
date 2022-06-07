const express = require('express');
const employeesController = require('../controllers/employees.controller');

const employeesRouter = express.Router();

employeesRouter.route('/').get(employeesController.getAll);

module.exports = employeesRouter;
