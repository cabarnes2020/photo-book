'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    imageUrl: DataTypes.STRING,
    photographerId: DataTypes.INTEGER
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Photographer, {foreignKey: 'photographerId'})
  };
  return Image;
};