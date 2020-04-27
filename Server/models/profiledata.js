'use strict';
module.exports = (sequelize, DataTypes) => {
  const profileData = sequelize.define('profileData', {
    name: DataTypes.STRING,
    bio: DataTypes.STRING,
    pictureUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  profileData.associate = function(models) {
    // associations can be defined here
    models.profileData.belongsTo(models.user);
  };
  return profileData;
};