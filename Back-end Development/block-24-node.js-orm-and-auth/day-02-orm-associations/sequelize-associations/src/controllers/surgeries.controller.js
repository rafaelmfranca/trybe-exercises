const { StatusCodes } = require('http-status-codes');
const surgeriesService = require('../services/surgeries.service');

module.exports = {
  getAllByDoctor: async (req, res, next) => {
    try {
      const surgeries = await surgeriesService.getAllByDoctor(req.params.name);

      if (!surgeries.length) {
        return next({
          status: StatusCodes.NOT_FOUND,
          message: 'Doctor not found',
        });
      }

      return res.status(StatusCodes.OK).json(surgeries);
    } catch (error) {
      return next(error);
    }
  },
};
