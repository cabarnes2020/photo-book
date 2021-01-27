'use strict';
const bcrypt = require('bcryptjs');

const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hashPass: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
  },
    {
      defaultScope: {
        attributes: {
          exclude: ['hashPass', 'email', 'createdAt', 'updatedAt'],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ['hashPass'] },
        },
        loginUser: {
          attributes: {},
        },
      },
    });

  User.prototype.toSafeObject = function () { // remember, this cannot be an arrow function
    const { id, userName, email } = this; // context will be the User instance
    return { id, userName, email };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashPass.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          userName: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ userName, email, password }) {
    const hashPass = bcrypt.hashSync(password);
    const user = await User.create({
      userName,
      email,
      hashPass,
    });
    return await User.scope('currentUser').findByPk(user.id);
  };
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Review, {foreignKey: 'userId'})
    User.hasMany(models.Booking, { foreignKey: 'userId' })
  };
  return User;
};