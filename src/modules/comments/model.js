const { fetch, fetchAll } = require("../../libs/postgres.js");
const model = require("./query.js");

const CREATECOMMENT = async ({ title, postId }, userId) => {
  try {
    return await fetch(model.CREATE, title, postId, userId);
  } catch (error) {
    console.error(error.message);
  }
};

const DELETECOMMENT = async ({ id }, userId) => {
  try {
    return await fetch(model.DELETE, id, userId);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { CREATECOMMENT, DELETECOMMENT };
