const { Commander, Troop } = require("../models");
// const { Sequelize, Model, Commander } = require("sequelize");

class Controller {
  static async landingPage(req, res) {
    try {
      res.render("landingPage");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }

  static async commanderList(req, res) {
    try {
      const data = await Commander.findAll({
        include: Troop,
      });
      // console.log(data.name);
      // console.log("ini data commander");
      // res.send(data);
      res.render("commanders", { data });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async troopList(req, res) {
    try {
      let options = {
        include: Commander,
      };
      if (req.query.CommanderId) {
        options.where = {
          CommanderId: req.query.CommanderId,
        };
      }
      const dataTroops = await Troop.findAll(options);
      const dataCommander = await Commander.findAll;
      res.render("troopList", { dataTroops, dataCommander });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async trainTroops(req, res) {
    // const {error} = req.query
    try {
      const data = await Commander.findAll();
      res.render("trainTroops", { data });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
}
module.exports = Controller;
