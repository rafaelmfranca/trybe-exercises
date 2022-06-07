const express = require('express');
const employeesController = require('../controllers/employees.controller');

const employeesRouter = express.Router();

employeesRouter.route('/').get(employeesController.getAll);

employeesRouter.route('/:id').get(employeesController.getById);

module.exports = employeesRouter;
