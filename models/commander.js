"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Commander extends Model {
    get commanderTitleName() {
      let title;
      if (this.militaryForce >= 500) {
        title = "General";
      } else if (this.militaryForce >= 100) {
        title = "Major";
      } else if (this.militaryForce >= 0) {
        title = "Sergeant";
      }
      return `${title} ${this.name}`;
    }



    
    static associate(models) {
      Commander.hasMany(models.Troop);
    }
  }
  Commander.init(
    {
      name: DataTypes.STRING,
      nation: DataTypes.STRING,
      age: DataTypes.INTEGER,
      militaryForce: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Commander",
    }
  );
  return Commander;
};
