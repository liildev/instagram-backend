const ApiError = require("../errors/ApiError.js");
const jwt = require("../libs/jwtGenerator.js");

module.exports = (req, res, next) => {
  try {
    if (req.url == "/api/auth/register" || req.url == "/api/auth/login") {
      return next();
    }
    if (
      req.url == "/api/profile" ||
      req.method == "POST" ||
      req.method == "PUT" ||
      req.method == "DELETE"
    ) {
      let { token } = req.headers;
      
      if (!token) {
        return next(ApiError.forbidden("Not Authorize"));
      }
      
      let user_id = jwt.verify(token);
      req.user_id = user_id;
    }
    return next();
  } catch (error) {
    next(ApiError.internal("Server Error"));
  }
};
