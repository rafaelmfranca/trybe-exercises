const express = require('express');
const plansController = require('../controllers/plans.controller');
const plansRouter = express.Router();

plansRouter.route('/:id').get(plansController.getByIdWithPatients);

module.exports = plansRouter;
