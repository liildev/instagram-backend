const ApiError = require("../errors/ApiError");

module.exports = (req, res, next) => {
  let { username, password, userlink } = req.body;

  let validateLink = (link) => {
    /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi.test(
      link
    );
  };

  if (req.url == "/api/auth/register") {
    if (![username, link, password].every(Boolean)) {
      return next(ApiError.unauthorized("Missing Credentials"));
    } else if (!validateLink(userlink)) {
      return next(ApiError.unauthorized("Invalid Link"));
    }
  }

  if (req.url == "/api/auth/login") {
    console.log('ok');
    if (![username, password].every(Boolean)) {
      return next(ApiError.unauthorized("Missing Credentials"));
    }
  }

  return next();
};
