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
    return queryInterface.bulkInsert('Reviews', [{
      userId: 1,
      photographerId: 1,
      revContent: "The pictures turned out great! Took a long time to get them back though.",
      rating: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      photographerId: 1,
      revContent: "Beautiful photos, the process was so easy to book!",
      rating: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      //
      userId: 2,
      photographerId: 3,
      revContent: "He was on time and the pictures are the sharpest quality I've seen! His prices reflect it though.",
      rating: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      photographerId: 1,
      revContent: "Some of the photos were blurry, but overall they are good.",
      rating: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 4,
      photographerId: 4,
      revContent: "She was on time and very efficient. My kids are so happy having pictures of their highlights.",
      rating: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 4,
      photographerId: 4,
      revContent: "Writing another review because her work is so amazing! She caught my dauther's winning goal!",
      rating: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      photographerId: 2,
      revContent: "She was late and overpriced, but photos came out nice.",
      rating: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      photographerId: 3,
      revContent: "My coach loves the team photos! Would definitely book again",
      rating: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      photographerId: 8,
      revContent: "These are the best photos of me I have ever seen! My manager can't wait to post these on my music page",
      rating: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 4,
      photographerId: 5,
      revContent: "This is the best photographer in Chicago hands down. Make sure you book before he is unavailable.",
      rating: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 4,
      photographerId: 10,
      revContent: "Half of the pics were too dark to use. Maybe she had an off night",
      rating: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      photographerId: 7,
      revContent: "My wife loved the photos and pringts. You know what they say, happy wife happy life.",
      rating: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      photographerId: 6,
      revContent: "Jori captured exactly what we wanted, but the prices are steep. I guess the best isn't cheap though.",
      rating: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      photographerId: 9,
      revContent: "I wanted photos that I could put on my living room wall. The photographer delivered.",
      rating: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      photographerId: 9,
      revContent: "I wanted nice pictures of the city, but I guess he is too used to shooting nature because they seem average.",
      rating: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      photographerId: 1,
      revContent: "Harold was a great person, but I think the photos could have came out a little bit better for the price.",
      rating: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 4,
      photographerId: 7,
      revContent: "She was late to the show, but still caught some absolute bangers!",
      rating: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      photographerId: 5,
      revContent: "I'm a model, and the photos from our shoot got me into the model agency I've always dreamed of working for!",
      rating: 5,
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
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
