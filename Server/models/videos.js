'use strict';
module.exports = (sequelize, DataTypes) => {
  const videos = sequelize.define('videos', {
    videoUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    userLikes: DataTypes.ARRAY,
    userDislikes: DataTypes.ARRAY
  }, {});
  videos.associate = function(models) {
    // associations can be defined here
    videos.belongsTo(models.user)
    videos.hasMany(models.comments)
  };
  return videos;
};