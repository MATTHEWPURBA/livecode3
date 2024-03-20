"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Troops", "CommanderId", {
      type: Sequelize.INTEGER,
      references: { model: "Commanders", key: "id" },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Troops", "CommanderId");
  },
};
