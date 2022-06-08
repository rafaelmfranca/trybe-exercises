const express = require('express');
const patientsController = require('../controllers/patients.controller');
const patientsRouter = express.Router();

patientsRouter.route('/plans').get(patientsController.getAllWithPlans);
patientsRouter.route('/surgeries').get(patientsController.getAllWithSurgeries);
patientsRouter.route('/').post(patientsController.create);

module.exports = patientsRouter;
