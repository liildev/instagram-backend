const router = require("express").Router();
const controller = require("./controller.js");


router.get("/", controller.PROFILE);

module.exports = router;
