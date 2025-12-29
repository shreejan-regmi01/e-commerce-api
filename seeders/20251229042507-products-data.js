"use strict";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      //electronics
      {
        name: "Quantum Series Wireless Headphones",
        slug: "quantum-series-v1",
        description:
          "High-fidelity audio with active noise cancellation and 40-hour battery life.",
        brand: "SonicWave",
        isActive: true,
        addedBy: 2,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      // Computer Peripherals
      {
        name: "ProKey RGB Mechanical Keyboard",
        slug: "prokey-rgb-mechanical-keyboard",
        description:
          "Durable mechanical keyboard with customizable RGB lighting and ergonomic design.",
        brand: "TechNova",
        isActive: true,
        addedBy: 2,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },

      // Fashion
      {
        name: "Urban Classic Denim Jacket",
        slug: "urban-classic-denim-jacket",
        description:
          "Stylish all-season denim jacket with a modern fit and premium stitching.",
        brand: "StreetMode",
        isActive: true,
        addedBy: 3,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },

      // Kids
      {
        name: "Adventure Explorer Toy Set",
        slug: "adventure-explorer-toy-set",
        description:
          "Educational and fun toy set designed to boost creativity and motor skills in kids.",
        brand: "PlayNest",
        isActive: true,
        addedBy: 3,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },

      // Infant Wear
      {
        name: "SoftCotton Baby Romper",
        slug: "softcotton-baby-romper",
        description:
          "Ultra-soft cotton romper for infants, gentle on skin and easy to wear.",
        brand: "TinyBloom",
        isActive: true,
        addedBy: 3,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("products", null, {});
  },
};
