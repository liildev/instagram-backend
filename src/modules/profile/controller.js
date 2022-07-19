const ApiError = require("../../errors/ApiError.js");
const { GETPROFILE } = require("./model.js");

class ProfileController {
  async PROFILE(req, res, next) {
    try {
      let userId = req.user_id;

      let user = await GETPROFILE(userId);
      delete user.password
      delete user.user_id
      
      if (user) {
        res.status(200).json({
          status: 200,
          message: "OK",
          data: user,
        });
      } else {
        next(ApiError.badRequest("Client Error"));
      }
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }
}

module.exports = new ProfileController();
