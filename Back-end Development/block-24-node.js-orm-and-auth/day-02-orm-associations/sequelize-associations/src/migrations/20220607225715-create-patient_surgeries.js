module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patient_surgeries', {
      patientId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'patient_id',
        references: {
          model: 'patients',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      surgeryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'surgery_id',
        references: {
          model: 'surgeries',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('patient_surgeries');
  },
};
