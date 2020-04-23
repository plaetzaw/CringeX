'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.changeColumn("comments", "videoId", {
        type: Sequelize.INTEGER,
          references: {
            model: 'videos',
            key: 'id'
        }
      })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
