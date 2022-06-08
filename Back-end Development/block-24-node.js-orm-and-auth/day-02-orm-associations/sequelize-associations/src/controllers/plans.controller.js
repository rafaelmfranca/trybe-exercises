const { StatusCodes } = require('http-status-codes');
const plansService = require('../services/plans.service');

module.exports = {
  getByIdWithPatients: async (req, res, next) => {
    try {
      const { id } = req.params;
      const planWithPatients = await plansService.getByIdWithPatients(id);

      if (!planWithPatients.length) {
        return next({
          status: StatusCodes.NOT_FOUND,
          message: 'Plan not found',
        });
      }

      return res.status(StatusCodes.OK).json(planWithPatients);
    } catch (error) {
      return next(error);
    }
  },
};
