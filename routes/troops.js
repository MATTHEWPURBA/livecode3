const express = require("express");

const Controller = require("../controllers/controller");
const router = express.Router();

router.get("/", Controller.troopList);
router.get("/train", Controller.trainTroops);



module.exports = router;