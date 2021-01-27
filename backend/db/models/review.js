'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    photographerId: DataTypes.INTEGER,
    revContent: DataTypes.TEXT,
    rating: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Photographer, { foreignKey: 'photographerId' });
    Review.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Review;
};