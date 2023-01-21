"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "apartments",
      [
        {
          location: "New York",
          bedroom: 2,
          balcony: true,
          price: 1500,
          pet: false,
          description:
            "Beautiful 2 bedroom apartment in the heart of New York City. Features a balcony and parking.",
          image: [
            "https://example.com/images/apartment1_1.jpg",
            "https://example.com/images/apartment1_2.jpg",
          ],
          name: "New York Dream Apartment",
          maxPeople: 4,
          parking: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          location: "Los Angeles",
          bedroom: 1,
          balcony: false,
          price: 1200,
          pet: true,
          description:
            "Cozy 1 bedroom apartment in the heart of Los Angeles. Pet-friendly and close to public transportation.",
          image: [
            "https://example.com/images/apartment2_1.jpg",
            "https://example.com/images/apartment2_2.jpg",
          ],
          name: "LA Cozy Apartment",
          maxPeople: 2,
          parking: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          location: "Chicago",
          bedroom: 3,
          balcony: true,
          price: 2000,
          pet: false,
          description:
            "Spacious 3 bedroom apartment in the heart of Chicago. Features a balcony and parking.",
          image: [
            "https://example.com/images/apartment3_1.jpg",
            "https://example.com/images/apartment3_2.jpg",
          ],
          name: "Chicago Family Apartment",
          maxPeople: 6,
          parking: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          location: "Houston",
          bedroom: 2,
          balcony: true,
          price: 1700,
          pet: true,
          description:
            "Nice 2 bedroom apartment in the heart of Houston. Features a balcony and pet-friendly.",
          image: ["apartment4_1.jpg", "apartment4_2.jpg"],
          name: "Houston Cozy Apartment",
          maxPeople: 4,
          parking: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          location: "Miami",
          bedroom: 1,
          balcony: true,
          price: 1000,
          pet: false,
          description:
            "Affordable 1 bedroom apartment in the heart of Miami. Features a balcony and close to beach",
          image: ["apartment5_1.jpg", "apartment5_2.jpg"],
          name: "Miami Beach Apartment",
          maxPeople: 2,
          parking: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          location: "San Francisco",
          bedroom: 3,
          balcony: true,
          price: 2500,
          pet: false,
          description:
            "Luxury 3 bedroom apartment in the heart of San Francisco. Features a balcony and parking.",
          image: ["apartment6_1.jpg", "apartment6_2.jpg"],
          name: "San Francisco Luxury Apartment",
          maxPeople: 6,
          parking: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("apartments", null, {});
  },
};
