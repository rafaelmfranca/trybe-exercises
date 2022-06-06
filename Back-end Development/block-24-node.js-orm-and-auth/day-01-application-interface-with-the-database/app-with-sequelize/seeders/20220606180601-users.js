'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          full_name: 'John Doe',
          email: 'john.doe@company.com',
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          phone_num: '+1 (555) 555-5555',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
