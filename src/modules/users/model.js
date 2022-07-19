const { fetch, fetchAll } = require("../../libs/postgres.js");
const model = require("./query.js");

const SEARCHUSERS = async (search) => {
  try {
    return await fetchAll(model.SEARCH, search);
  } catch (error) {
    console.log(error.message);
  }
};

const USER = async ({ id }) => {
  try {
    return await fetch(model.USER, id);
  } catch (error) {
    console.log(error.message);
  }
};


const EDITUSER = async ({ username, visibility }, user_id) => {
  try {
    return await fetch(model.EDIT_USER, username, visibility, user_id);
  } catch (error) {
    console.log(error.message);
  }
};

const EDITUSERNAME = async (username, user_id) => {
  try {
    return await fetch(model.EDIT_NAME, username, user_id);
  } catch (error) {
    console.log(error.message);
  }
};

const EDITVISIBILITY = async (visibility, user_id) => {
  try {
    return await fetch(model.EDIT_VISISBLILITY, visibility, user_id);
  } catch (error) {
    console.log(error.message);
  }
};

const DELETEUSER = async ({ username, password }) => {
  try {
    return await fetch(model.DELETE, username, password);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  EDITUSER,
  SEARCHUSERS,
  USER,
  DELETEUSER,
  EDITUSERNAME,
  EDITVISIBILITY,
};
