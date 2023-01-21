"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // A rental is associated with one user and one apartment
      rental.belongsTo(models.user);
      rental.belongsTo(models.apartment);
    }
  }
  rental.init(
    {
      userId: DataTypes.INTEGER,
      apartmentId: DataTypes.INTEGER,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      totalPrice: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "rental",
    }
  );
  return rental;
};
