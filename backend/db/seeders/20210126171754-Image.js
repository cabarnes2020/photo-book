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

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/IMG_1751.JPEG',
      photographerId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/IMG_0015.JPG',
      photographerId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/IMG_1823.JPG',
      photographerId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/IMG_1836.JPG',
      photographerId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/IMG_1751.JPEG',
      photographerId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/IMG_0015.JPG',
      photographerId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/IMG_1823.JPG',
      photographerId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/IMG_1836.JPG',
      photographerId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/baseball-pic.jpg',
      photographerId: 3,
      createdAt: new Date(),
      updatedAt: new Date() 
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/college-football-pic.jpeg',
      photographerId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/football-pic.jpg',
      photographerId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/girl-basketball.jpg',
      photographerId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/women-soccer-pic.jpg',
      photographerId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/baseball-pic.jpg',
      photographerId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/college-football-pic.jpeg',
      photographerId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/football-pic.jpg',
      photographerId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/girl-basketball.jpg',
      photographerId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/women-soccer-pic.jpg',
      photographerId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/black-wedding.jpg',
      photographerId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/banff-wedding.jpg',
      photographerId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/bridesmaids.jpg',
      photographerId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/shore-wedding.jpeg',
      photographerId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/vintage-car-wedding.jpg',
      photographerId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/black-wedding.jpg',
      photographerId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/banff-wedding.jpg',
      photographerId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/bridesmaids.jpg',
      photographerId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/shore-wedding.jpeg',
      photographerId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      imageUrl: 'https://photo-book-images.s3.us-east-2.amazonaws.com/vintage-car-wedding.jpg',
      photographerId: 7,
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
