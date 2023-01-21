"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "bookings",
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
        {
          startDate: "2022-07-01",
          endDate: "2022-07-10",
          totalPrice: 1000,
          userId: 3,
          apartmentId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          startDate: "2022-08-01",
          endDate: "2022-08-10",
          totalPrice: 1200,
          userId: 4,
          apartmentId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("bookings", null, {});
  },
};
