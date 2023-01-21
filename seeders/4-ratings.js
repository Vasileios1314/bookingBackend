"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          userId: 1,
          apartmentId: 1,
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          apartmentId: 2,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          apartmentId: 3,
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          apartmentId: 4,
          rating: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ratings", null, {});
  },
};
