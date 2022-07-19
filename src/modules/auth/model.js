const { fetch } = require("../../libs/postgres.js");
const { LOGIN, REGISTER, CHECK } = require("./query.js");

const CHECKUSER = async ({ username }) => {
  try {
    return await fetch(CHECK, username);
  } catch (error) {
    console.log(error.message);
  }
};

const USERLOGIN = async ({ username, password }) => {
  try {
    return await fetch(LOGIN, username, password);
  } catch (error) {
    console.log(error.message);
  }
};

const USERREGISTER = async (
  { username, password, userlink },
  { filename }
) => {
  const user = await fetch(
    REGISTER,
    username,
    password,
    filename,
    userlink
  );
  return user;
};

module.exports = {
  USERLOGIN,
  USERREGISTER,
  CHECKUSER,
};
