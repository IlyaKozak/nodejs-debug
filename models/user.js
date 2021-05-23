const { DataTypes } = require('sequelize');

const sequelize = require('../db');

module.exports = sequelize.define('user', {
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
});