const ApiError = require("../../errors/ApiError.js");
const {
  SEARCHUSERS,
  EDITUSER,
  USER,
  DELETEUSER,
  EDITUSERNAME,
  EDITVISIBILITY,
} = require("./model.js");

class UsersController {
  async GETUSERS(req, res, next) {
    try {
      let { search } = req.query;
      search = search.toLowerCase();

      let users = await SEARCHUSERS(search);
      if (users) {
        res.status(200).json({
          status: 200,
          message: "OK",
          data: users,
        });
      } else {
        next(ApiError.badRequest("Client Error"));
      }
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }

  async GETONE(req, res, next) {
    try {
      let user = await USER(req.params);

      if (user.visibility == true) {
        res.status(200).json({
          status: 200,
          message: "OK",
          data: user,
        });
      } else if (user.visibility == false) {
        res.status(200).json({
          status: 200,
          message: "It Is Private Account",
          user: {
            avatar: user.avatar,
            name: user.user_name,
            link: user.user_link,
            posts: null,
          },
        });
      } else {
        next(ApiError.badRequest("Client Error"));
      }
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }

  async PUT(req, res, next) {
    try {
      let user_id = req.user_id;
      let { username, visibility } = req.body;
      if (username) {
        let user = await EDITUSERNAME(username, user_id);
        res.status(200).json({
          status: 200,
          message: "Username Updated",
          data: user,
        });
      } else if (visibility) {
        let user = await EDITVISIBILITY(visibility, user_id);
        res.status(200).json({
          status: 200,
          message: "Visibility Updated",
          data: user,
        });
      } else if (username && visibility) {
        let user = await EDITUSER(req.body, user_id);
        res.status(200).json({
          status: 200,
          message: "Username And Visibility Updated",
          data: user,
        });
      } else {
        next(ApiError.badRequest("Client Error"));
      }
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }

  async DELETE(req, res, next) {
    try {
      let user = await DELETEUSER(req.body);

      if (!user) {
        next(ApiError.badRequest("Wrong Username or Password"));
      }

      let random = Math.floor(1000 + Math.random() * 900000);
      user.user_name
        ? (user.user_name = "DeletedAccount" + random)
        : user.user_name;

      if (user) {
        res.status(200).json({
          status: 200,
          message: "Account Deleted",
          data: { username: user.user_name, id: user.user_id },
        });
      }
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }
}

module.exports = new UsersController();
