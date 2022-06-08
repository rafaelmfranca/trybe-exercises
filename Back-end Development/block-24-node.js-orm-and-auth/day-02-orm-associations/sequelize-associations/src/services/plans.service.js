const { Patients, Plans } = require('../models');

module.exports = {
  getByIdWithPatients: (planId) => {
    return Plans.findAll({
      where: { id: planId },
      include: { model: Patients, as: 'patients' },
    });
  },
};
