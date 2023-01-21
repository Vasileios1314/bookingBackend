"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class availability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // An availability is associated with one apartment
      availability.belongsTo(models.apartment);
    }
  }
  availability.init(
    {
      apartmentId: DataTypes.INTEGER,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "availability",
    }
  );
  return availability;
};
