module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'patients',
      [
        {
          full_name: 'Alberto Dos Santos',
          plan_id: 1,
        },
        {
          full_name: 'Maria Silveira Rodrigues',
          plan_id: 3,
        },
        {
          full_name: 'Osvaldo de Andrade',
          plan_id: 3,
        },
        {
          full_name: 'Cristiano Ronaldo Messi',
          plan_id: 2,
        },
        {
          full_name: 'Luis Carlos Suarez',
          plan_id: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('patients', null, {});
  },
};
