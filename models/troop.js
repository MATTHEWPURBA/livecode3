"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Troop extends Model {
    static associate(models) {
      Troop.belongsTo(models.Commander);
    }
  }
  Troop.init(
    {
      name: DataTypes.STRING,
      tribe: DataTypes.STRING,
      type: DataTypes.STRING,
      attackPower: DataTypes.INTEGER,
      CommanderId: {
        type: DataTypes.INTEGER,
        references: { model: "Commanders", key: "id" },
      },
    },

    {
      hooks: {
        beforeCreate: async (instance, option) => {
          const attackPowerMap = {
            Infantry: {
              Gallia: 65,
              Teuton: 60,
              Roman: 70,
            },

            Cavalry: {
              Gallia: 140,
              Teuton: 150,
              Roman: 180,
            },
          };

          instance.attackPower = attackPowerMap[instance.type][instance.tribe];
          await sequelize.models.Commander.increment({ militaryForce: instance.attackPower }, { where: { id: instance.CommanderId } });
        },
      },

      sequelize,
      modelName: "Troop",
    }
  );
  return Troop;
};
