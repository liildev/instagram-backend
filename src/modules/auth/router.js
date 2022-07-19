const router = require("express").Router();
const { avatarUpload } = require("../../libs/multer.js");
const validation = require("../../middlewares/validation.middleware.js");
const controller = require("./controller.js");


router.post("/register", validation, avatarUpload, controller.REGISTER);
router.post("/login", validation, controller.LOGIN);

module.exports = router;
