const ApiError = require("../../errors/ApiError.js");
const { sign } = require("../../libs/jwtGenerator.js");
const { USERLOGIN, USERREGISTER, CHECKUSER } = require("./model.js");

class AuthController {
  async REGISTER(req, res, next) {
    try {
      let user = await CHECKUSER(req.body);
      if (user) {
        return next(ApiError.unauthorized("User Already Exist"));
      }

      let newUser = await USERREGISTER(req.body, req.file);
      delete newUser.password

      if (newUser) {
        res.status(200).json({
          status: 200,
          message: "You Registered",
          token: sign(newUser.user_id),
          data: newUser
        });
      } else {
        next(ApiError.unauthorized("Client Error"));
      }
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }

  async LOGIN(req, res, next) {
    try {
      let user = await USERLOGIN(req.body);

      delete user.password

      if (user) {
        res.status(200).json({
          status: 200,
          message: "You Logged",
          token: sign(user.user_id),
          data: user
        });
      } else {
        next(ApiError.unauthorized("Wrong Username or Password"));
      }
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }
}

module.exports = new AuthController();
