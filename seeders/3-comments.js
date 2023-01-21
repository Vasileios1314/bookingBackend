"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          comment: "fantastic",
          userId: 5,
          apartmentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "Nice!!",
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
    await queryInterface.bulkDelete("comments", null, {});
  },
};
