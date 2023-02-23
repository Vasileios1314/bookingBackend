"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // A user can have many comments, ratings, bookings and payments
      user.hasMany(models.comment);
      user.hasMany(models.rating);
      user.hasMany(models.booking);
      user.hasMany(models.payment);
    }
  }
  user.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.INTEGER,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
