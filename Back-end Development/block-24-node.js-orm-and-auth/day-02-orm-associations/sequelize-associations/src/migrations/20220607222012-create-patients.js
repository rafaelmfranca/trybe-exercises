module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patients', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'full_name',
      },
      planId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'plan_id',
        onDelete: 'CASCADE',
        references: {
          model: 'plans',
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('patients');
  },
};
