"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "rentals",
      [
        {
          startDate: "2022-05-01",
          endDate: "2022-05-10",
          totalPrice: 1500,
          userId: 5,
          apartmentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          startDate: "2022-06-01",
          endDate: "2022-06-15",
          totalPrice: 2000,
          userId: 2,
          apartmentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("rentals", null, {});
  },
};
