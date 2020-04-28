'use strict';
module.exports = (sequelize, DataTypes) => {
  const likes = sequelize.define('likes', {
    userId: DataTypes.INTEGER
  }, {});
  likes.associate = function(models) {
    // associations can be defined here
    models.likes.belongsTo(models.user);
    models.likes.belongsTo(models.videos);
  };
  return likes;
};