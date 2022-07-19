const ApiError = require("../../errors/ApiError.js");
const { CREATECOMMENT, DELETECOMMENT } = require("./model.js");

class CommentsController {
  async CREATE(req, res, next) {
    try {
      let userId = req.user_id

      let comment = await CREATECOMMENT(req.body, userId);

      if (comment) {
        res.status(201).json({
          status: 201,
          message: "Comment Added",
          data: comment
        });
      } else {
        next(ApiError.unauthorized("Client Error"));
      }
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }

  async DELETE(req, res, next) {
    try {
      let userId = req.user_id

      let comment = await DELETECOMMENT(req.params, userId);

      if (comment) {
        res.status(200).json({
          status: 200,
          message: "Comment Deleted",
          data: comment
        });
      } else {
        next(ApiError.unauthorized("Client Error"));
      }
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }
}

module.exports = new CommentsController();
