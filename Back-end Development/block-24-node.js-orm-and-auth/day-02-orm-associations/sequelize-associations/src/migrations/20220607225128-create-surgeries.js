module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('surgeries', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      specialty: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      doctor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('surgeries');
  },
};
