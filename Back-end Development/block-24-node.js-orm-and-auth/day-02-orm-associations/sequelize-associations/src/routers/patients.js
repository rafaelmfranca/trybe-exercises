const express = require('express');
const patientsController = require('../controllers/patients.controller');
const patientsRouter = express.Router();

patientsRouter.route('/plans').get(patientsController.getAllWithPlans);

module.exports = patientsRouter;
