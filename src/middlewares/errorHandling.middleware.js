const ApiError = require("../errors/ApiError.js");

module.exports = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ status: err.status, message: err.message });
  }

  res.status(err.status).json({
    status: err.status,
    message: "An unexpected error",
  });

  // process.exit();
  // return res.status(500).json({ message: "An unexpected error" });
};
