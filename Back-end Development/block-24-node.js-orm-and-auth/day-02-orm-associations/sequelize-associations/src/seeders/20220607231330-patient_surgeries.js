module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'patient_surgeries',
      [
        {
          patient_id: 3,
          surgery_id: 1,
        },
        {
          patient_id: 3,
          surgery_id: 6,
        },
        {
          patient_id: 4,
          surgery_id: 5,
        },
        {
          patient_id: 1,
          surgery_id: 1,
        },
        {
          patient_id: 3,
          surgery_id: 2,
        },
        {
          patient_id: 4,
          surgery_id: 7,
        },
        {
          patient_id: 1,
          surgery_id: 2,
        },
        {
          patient_id: 1,
          surgery_id: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('patient_surgeries', null, {});
  },
};
