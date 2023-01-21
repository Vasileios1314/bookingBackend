"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // A payment is associated with one booking
      payment.belongsTo(models.booking);
    }
  }
  payment.init(
    {
      bookingId: DataTypes.INTEGER,
      amount: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "payment",
    }
  );
  return payment;
};
