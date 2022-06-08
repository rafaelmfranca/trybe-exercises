const express = require('express');
const surgeriesController = require('../controllers/surgeries.controller');
const surgeriesRouter = express.Router();

surgeriesRouter.route('/:name').get(surgeriesController.getAllByDoctor);

module.exports = surgeriesRouter;
