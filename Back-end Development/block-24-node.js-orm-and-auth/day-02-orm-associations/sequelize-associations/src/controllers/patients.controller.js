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
  create: async (req, res, next) => {
    try {
      const response = await patientsService.create(req.body);

      if (!response) {
        return next({
          status: StatusCodes.NOT_FOUND,
          message: 'Plan not found',
        });
      }

      return res.status(StatusCodes.CREATED).json(response);
    } catch (error) {
      return next(error);
    }
  },
};
