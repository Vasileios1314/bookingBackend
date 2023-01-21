"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("apartments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      location: {
        type: Sequelize.STRING,
      },
      bedroom: {
        type: Sequelize.INTEGER,
      },
      balcony: {
        type: Sequelize.BOOLEAN,
      },
      price: {
        type: Sequelize.FLOAT,
      },
      pet: {
        type: Sequelize.BOOLEAN,
      },
      description: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      name: {
        type: Sequelize.STRING,
      },
      maxPeople: {
        type: Sequelize.INTEGER,
      },
      parking: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("apartments");
  },
};
