const { Patients, Plans, Surgeries } = require('../models');

module.exports = {
  getAllWithPlans: () => {
    return Patients.findAll({ include: { model: Plans, as: 'plans' } });
  },
  getAllWithSurgeries: () => {
    return Patients.findAll({
      include: {
        model: Surgeries,
        as: 'surgeries',
        through: { attributes: [] },
      },
    });
  },
};
