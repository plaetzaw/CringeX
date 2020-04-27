'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    handle: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    models.user.hasMany(models.comments);
    models.user.hasMany(models.videos);
    models.user.hasMany(models.profileData);
  };
  return user;
};