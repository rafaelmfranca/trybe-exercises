'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Books', 'publisher', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.removeColumn('Books', 'publisher');
  },
};
