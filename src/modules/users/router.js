const router = require("express").Router();
const controller = require("./controller.js");

router
  .route("/")
  .get(controller.GETUSERS)
  .put(controller.PUT)
  .delete(controller.DELETE);

router.get("/:id", controller.GETONE);
// router.get("/profile", controller.PROFILE);

module.exports = router;
