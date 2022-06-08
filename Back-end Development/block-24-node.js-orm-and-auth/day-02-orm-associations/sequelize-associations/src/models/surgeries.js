module.exports = (sequelize, DataTypes) => {
  const Surgeries = sequelize.define(
    'Surgeries',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      specialty: DataTypes.STRING,
      doctor: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'surgeries',
    }
  );

  return Surgeries;
};
