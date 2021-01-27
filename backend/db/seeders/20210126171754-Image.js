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
   return queryInterface.bulkInsert('Images', [{
     imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/5I7A2137.jpg',
     photographerId: 2,
     createdAt: new Date(),
     updatedAt: new Date()
   }, 

   {
     imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/5I7A2203.jpg',
     photographerId: 2,
     createdAt: new Date(),
     updatedAt: new Date()
   },

   {
     imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/5I7A2210.jpg',
     photographerId: 2,
     createdAt: new Date(),
     updatedAt: new Date()
   },

   {
     imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/5I7A2303.jpg',
     photographerId: 2,
     createdAt: new Date(),
     updatedAt: new Date()
   }, 

   {
     imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/5I7A2798.jpg',
     photographerId: 2,
     createdAt: new Date(),
     updatedAt: new Date()
   },

   {
     imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/5I7A2865.jpg',
     photographerId: 2,
     createdAt: new Date(),
     updatedAt: new Date()
   }, 
 
   {
     imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/5I7A2137.jpg',
     photographerId: 2,
     createdAt: new Date(),
     updatedAt: new Date()
   }, 

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/5I7A2203.jpg',
      photographerId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/5I7A2210.jpg',
      photographerId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/5I7A2303.jpg',
      photographerId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/5I7A2798.jpg',
      photographerId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/5I7A2865.jpg',
      photographerId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },

   
     
   ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Images', null, {});
  }
};
