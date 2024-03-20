const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();

router.get("/", Controller.landingPage);
router.use("/commanders", require("./commanders"));
router.use("/troops", require("./troops"));

module.exports = router;
