"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // A booking is associated with one user and one apartment
      booking.belongsTo(models.user);
      booking.belongsTo(models.apartment);
    }
  }
  booking.init(
    {
      userId: DataTypes.INTEGER,
      apartmentId: DataTypes.INTEGER,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      totalPrice: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "booking",
    }
  );
  return booking;
};
