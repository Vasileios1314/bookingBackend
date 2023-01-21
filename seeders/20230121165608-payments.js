"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "payments",
      [
        {
          bookingId: 2,
          amount: 1500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookingId: 1,
          amount: 2000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("payments", null, {});
  },
};
