const { fetch, fetchAll } = require("../../libs/postgres.js");
const model = require("./query.js");

const POSTS = async () => {
  return await fetchAll(model.POSTS);
};

const POST = async ({ id }) => {
  return await fetchAll(model.POST, id);
};

const CREATEPOST = async ({ title }, userId) => {
  return await fetch(model.CREATE_POST, title, userId);
};

const UPLOADPHOTOS = async ({ id }, { gallery }) => {
  try {
    let photos = [];
    for (let photo of gallery) {
      photos[photos.length] = await fetch(model.POST_PHOTOS, id, photo.filename);
    }
    return photos;
  } catch (error) {
    console.error(error);
  }
};

const EDITPOST = async ({ title }, { id }, user_id) => {
  console.log(title);
  console.log(id);
  return await fetch(model.EDIT_POST, title, id, user_id);
};

const DELETEPOST = async ({ id }, user_id) => {
  return await fetch(model.DELETE_POST, id, user_id);
};

module.exports = {
  POSTS,
  POST,
  CREATEPOST,
  UPLOADPHOTOS,
  EDITPOST,
  DELETEPOST,
};
