'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Photographers', [{
      name: 'Harold ',
      address1: 'Dallas',
      address2: '',
      avgRating: 3,
      photoType: 'landscape', 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sheila ',
      address1: 'New York',
      address2: '',
      avgRating: 4,
      photoType: 'portrait',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Kevin ',
      address1: 'Boston',
      address2: '',
      avgRating: 2,
      photoType: 'sports',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Denise',
      address1: 'Los Angeles',
      address2: '',
      avgRating: 5,
      photoType: 'sports',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Christion',
      address1: 'Chicago',
      address2: '',
      avgRating: 5,
      photoType: 'portrait',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jori',
      address1: 'Washington D.C.',
      address2: '',
      avgRating: 5,
      photoType: 'wedding',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'George',
      address1: 'Las Vegas',
      address2: '',
      avgRating: 4,
      photoType: 'wedding',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ashli',
      address1: 'Los Angeles',
      address2: '',
      avgRating: 4,
      photoType: 'concert',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jeremy',
      address1: 'Phoenix',
      address2: '',
      avgRating: 3,
      photoType: 'landscape',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dazja',
      address1: 'Atlanta',
      address2: '',
      avgRating: 2,
      photoType: 'concert',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

    */
      return queryInterface.bulkDelete('Photographers', null, {});
    
  }
};
