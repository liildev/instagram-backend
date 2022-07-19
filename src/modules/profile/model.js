const { fetch } = require("../../libs/postgres.js");
const model = require("./query.js");

const GETPROFILE = async (userId) => {
  try {
    return await fetch(model.PROFILE, userId);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  GETPROFILE,
};
