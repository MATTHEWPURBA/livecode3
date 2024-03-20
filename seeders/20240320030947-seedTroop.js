"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = require("../data/troops.json").map((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
      return el;
    });
    await queryInterface.bulkInsert("Troops", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Troops", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
  },
};
