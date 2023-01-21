"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "availabilities",
      [
        {
          startDate: "2022-05-01",
          endDate: "2022-05-10",
          price: 1500,
          apartmentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          startDate: "2022-06-01",
          endDate: "2022-06-15",
          price: 2000,
          apartmentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("availabilities", null, {});
  },
};
