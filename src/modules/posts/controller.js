const ApiError = require("../../errors/ApiError.js");
const {
  POSTS,
  POST,
  CREATEPOST,
  UPLOADPHOTOS,
  EDITPOST,
  DELETEPOST,
} = require("./model.js");

class PostsController {
  async GETALL(req, res, next) {
    try {
      let posts = await POSTS();
      if (posts) {
        res.status(200).json({
          status: 200,
          message: "OK",
          data: posts,
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
      let post = await POST(req.params);
      if (post) {
        res.status(200).json({
          status: 200,
          message: "OK",
          data: post,
        });
      } else {
        next(ApiError.badRequest("Client Error"));
      }
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }

  async CREATE(req, res, next) {
    try {
      let userId = req.user_id;

      let post = await CREATEPOST(req.body, userId);
      if (post) {
        res.status(201).json({
          status: 201,
          message: "New Post Created",
          data: post,
        });
      } else {
        next(ApiError.badRequest("Client Error"));
      }
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }

  async POSTPHOTOS(req, res, next) {
    try {
      const photos = await UPLOADPHOTOS(req.params, req.files);
      if (photos) {
        res.status(201).json({
          status: 201,
          message: "Photos Added",
          data: photos,
        });
      } else {
        next(ApiError.badRequest("Client Error"));
      }
    } catch (error) {
      console.error(error);
    }
  }
  async PUT(req, res, next) {
    try {
      let user_id = req.user_id;

      let post = await EDITPOST(req.body, req.params, user_id);
      if (post) {
        res.status(200).json({
          status: 200,
          message: "Post Updated",
          data: post,
        });
      } else {
        next(ApiError.badRequest("Client Error"));
      }
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }

  async DELETE(req, res, next) {
    let user_id = req.user_id;
    let post = await DELETEPOST(req.params, user_id);
    if (post) {
      res.status(200).json({
        status: 200,
        message: "Post Daleted",
        data: post,
      });
    } else {
      next(ApiError.badRequest("Client Error"));
    }
    try {
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }
}

module.exports = new PostsController();
