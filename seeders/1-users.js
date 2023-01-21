"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "bill",
          email: "bob@bob.com",
          phone: 1212121212,
          password: "1111",
          country: "Australia",
          city: "Sydney",
          image: "https://example.com/images/user10.jpg",
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bob ",
          email: "bob@ex.com",
          phone: 1212121999,
          password: "1111",
          country: "Albania",
          city: "Vlore",
          image: "https://example.com/images/user9.jpg",
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Doe",
          email: "johndoe@example.com",
          phone: 1234567890,
          password: "password1",
          country: "United States",
          city: "New York",
          image: "https://example.com/images/user1.jpg",
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jane Smith",
          email: "janesmith@example.com",
          phone: 1987654321,
          password: "password2",
          country: "Canada",
          city: "Toronto",
          image: "https://example.com/images/user2.jpg",
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bob Johnson",
          email: "bobjohnson@example.com",
          phone: 1212121212,
          password: "password3",
          country: "Australia",
          city: "Sydney",
          image: "https://example.com/images/user3.jpg",
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
