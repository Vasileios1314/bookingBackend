"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class apartment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // An apartment can have many comments, ratings, availabilities, bookings and rentals
      apartment.hasMany(models.comment);
      apartment.hasMany(models.rating);
      apartment.hasMany(models.availability);
      apartment.hasMany(models.booking);
      apartment.hasMany(models.rental);
    }
  }
  apartment.init(
    {
      location: DataTypes.STRING,
      bedroom: DataTypes.INTEGER,
      balcony: DataTypes.BOOLEAN,
      price: DataTypes.FLOAT,
      pet: DataTypes.BOOLEAN,
      description: DataTypes.STRING,
      image: DataTypes.ARRAY(DataTypes.STRING),
      name: DataTypes.STRING,
      maxPeople: DataTypes.INTEGER,
      parking: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "apartment",
    }
  );
  return apartment;
};
