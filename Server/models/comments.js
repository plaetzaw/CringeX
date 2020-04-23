'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    comment: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    videoId: DataTypes.INTEGER
  }, {});
  comments.associate = function(models) {
    // associations can be defined here
    comments.belongsTo(models.user)
    comments.belongsTo(models.videos)
  };
  return comments;
};