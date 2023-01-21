"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      rating.belongsTo(models.apartment);
      rating.belongsTo(models.user);
    }
  }
  rating.init(
    {
      userId: DataTypes.INTEGER,
      apartmentId: DataTypes.INTEGER,
      rating: {
        type: DataTypes.INTEGER,
        validate: {
          isValidRating: function (value) {
            if (value < 1 || value > 5) {
              throw new Error("Rating must be between 1 and 5");
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: "rating",
    }
  );
  return rating;
};
