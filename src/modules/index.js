const router = require('express').Router()
const authRouter = require("./auth/router.js");
const usersRouter = require("./users/router.js");
const postsRouter = require("./posts/router.js");
const commentsRouter = require("./comments/router.js");
const profileRouter = require("./profile/router.js");




router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/posts", postsRouter);
router.use("/comments", commentsRouter);
router.use('/profile', profileRouter);

module.exports = router;
