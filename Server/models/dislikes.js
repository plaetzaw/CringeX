'use strict';
module.exports = (sequelize, DataTypes) => {
  const dislikes = sequelize.define('dislikes', {
    userId: DataTypes.INTEGER
  }, {});
  dislikes.associate = function(models) {
    // associations can be defined here
    models.dislikes.belongsTo(models.user);
    models.dislikes.belongsTo(models.videos);
  };
  return dislikes;
};