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
        attributes: { exclude: ['doctor'] },
        through: { attributes: [] },
      },
    });
  },
  create: async ({ fullName, planId }) => {
    const plan = await Plans.findByPk(planId);

    if (!plan) return false;

    return Patients.create({ fullName, planId });
  },
};
