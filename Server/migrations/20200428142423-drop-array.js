'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return Promise.all([
        queryInterface.removeColumn('videos', 'userLikes'),
        queryInterface.removeColumn('videos', 'userDislikes')
      ]) 
  }
}
