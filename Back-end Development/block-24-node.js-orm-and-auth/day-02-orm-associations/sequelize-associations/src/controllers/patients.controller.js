const { StatusCodes } = require('http-status-codes');
const patientsService = require('../services/patients.service');

module.exports = {
  getAllWithPlans: async (_req, res, next) => {
    try {
      const patients = await patientsService.getAllWithPlans();
      return res.status(StatusCodes.OK).json(patients);
    } catch (error) {
      return next(error);
    }
  },
  getAllWithSurgeries: async (_req, res, next) => {
    try {
      const patients = await patientsService.getAllWithSurgeries();
      return res.status(StatusCodes.OK).json(patients);
    } catch (error) {
      return next(error);
    }
  },
};
