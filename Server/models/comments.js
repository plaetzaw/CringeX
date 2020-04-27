'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    comment: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    videoId: DataTypes.INTEGER
  }, {});
  comments.associate = function(models) {
    // associations can be defined here
    models.comments.belongsTo(models.user);
    models.comment.belongsTo(models.videos)
  };
  return comments;
};