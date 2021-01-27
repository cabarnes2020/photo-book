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
   return queryInterface.bulkInsert('Bookings', [{
     userId: 1,
     photographerId: 1,
     price: 200.00,
     bookingDate: new Date(2020,12,21),
     timeOfShoot: '2:00 p.m.',
     createdAt: new Date(),
     updatedAt: new Date()
   },
  {
    userId: 2,
    photographerId: 5,
    price: 220.00,
    bookingDate: new Date(2021,1,10),
    timeOfShoot: '3:30 p.m.', 
    createdAt: new Date(),
    updatedAt: new Date()
  }, 
  {
    userId: 3,
    photographerId: 2,
    price: 100.00,
    bookingDate: new Date(2021,1,20),
    timeOfShoot: '12:00 p.m.', 
    createdAt: new Date(),
    updatedAt: new Date()
  }, 
  {
    userId: 4,
    photographerId: 6,
    price: 750.00,
    bookingDate: new Date(2021,1,10),
    timeOfShoot: '9:30 a.m.',
    createdAt: new Date(),
    updatedAt: new Date()
  }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
