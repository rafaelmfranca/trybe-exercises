module.exports = (sequelize, DataTypes) => {
  const PatientSurgeries = sequelize.define(
    'PatientSurgeries',
    {},
    {
      timestamps: false,
      tableName: 'patient_surgeries',
      underscored: true,
    }
  );

  PatientSurgeries.associate = (models) => {
    models.Surgeries.belongsToMany(models.Patients, {
      as: 'patients',
      through: PatientSurgeries,
      foreignKey: 'surgeryId',
      otherKey: 'patientId',
    });

    models.Patients.belongsToMany(models.Surgeries, {
      as: 'surgeries',
      through: PatientSurgeries,
      foreignKey: 'patientId',
      otherKey: 'surgeryId',
    });
  };

  return PatientSurgeries;
};
