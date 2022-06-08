module.exports = (sequelize, DataTypes) => {
  const Plans = sequelize.define(
    'Plans',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      coverage: DataTypes.STRING,
      price: DataTypes.DOUBLE,
    },
    {
      timestamps: false,
      tableName: 'plans',
      underscored: true,
    }
  );

  Plans.associate = (models) => {
    Plans.hasMany(models.Patients, {
      foreignKey: 'planId',
      as: 'patients',
    });
  };

  return Plans;
};
