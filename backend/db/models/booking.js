'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    userId: DataTypes.INTEGER,
    photographerId: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    bookingDate: DataTypes.DATEONLY,
    timeOfShoot: DataTypes.STRING
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.Photographer, { foreignKey: 'photographerId' });
    Booking.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Booking;
};