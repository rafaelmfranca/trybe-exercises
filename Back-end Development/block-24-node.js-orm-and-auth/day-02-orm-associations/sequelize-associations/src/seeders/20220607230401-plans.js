module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'plans',
      [
        {
          coverage: 'Total',
          price: 549.99,
        },
        {
          coverage: 'Partial',
          price: 349.99,
        },
        {
          coverage: 'Emergencies only',
          price: 109.99,
        },
        {
          coverage: 'Family',
          price: 949.99,
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('plans', null, {});
  },
};
