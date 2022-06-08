module.exports = (sequelize, DataTypes) => {
  const Patients = sequelize.define(
    'Patients',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      fullName: DataTypes.STRING,
      planId: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
      timestamps: false,
      tableName: 'patients',
      underscored: true,
    }
  );

  Patients.associate = (models) => {
    Patients.belongsTo(models.Plans, {
      foreignKey: 'planId',
      as: 'plans',
    });
  };

  return Patients;
};
