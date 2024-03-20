"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = require("../data/commander.json").map((el) => {
      el.militaryForce = 0;
      el.createdAt = new Date();
      el.updatedAt = new Date();
      return el;
    });
    await queryInterface.bulkInsert("Commanders", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Commanders", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
  },
};
