'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');
const { query } = require("express");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        userName: 'Demo-lition',
        hashPass: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        userName: 'FakeUser1',
        hashPass: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        userName: 'FakeUser2',
        hashPass: bcrypt.hashSync(faker.internet.password()),
      },
    ], {})
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      userName: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
