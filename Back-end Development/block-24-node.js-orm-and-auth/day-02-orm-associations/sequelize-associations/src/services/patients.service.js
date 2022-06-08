const { Patients, Plans } = require('../models');

module.exports = {
  getAllWithPlans: () => {
    return Patients.findAll({ include: { model: Plans, as: 'plans' } });
  },
};
