'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photographer = sequelize.define('Photographer', {
    name: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    avgRating: DataTypes.INTEGER,
    photoType: DataTypes.STRING
  }, {});
  Photographer.associate = function(models) {
    // associations can be defined here
    Photographer.hasMany(models.Image, {foreignKey: 'photographerId'})
    Photographer.hasMany(models.Review, { foreignKey: 'photographerId' })
    Photographer.hasMany(models.Booking, { foreignKey: 'photographerId' })
  };
  return Photographer;
};