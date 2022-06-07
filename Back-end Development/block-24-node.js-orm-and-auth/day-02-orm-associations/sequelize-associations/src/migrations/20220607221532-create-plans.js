module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('plans', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      coverage: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('plans');
  },
};
