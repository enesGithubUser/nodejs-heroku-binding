const db = require("./db-config");

module.exports = {
  findUsers,
  findPosts,
  findUserById,
  findPostsByUser
};

function findUsers() {
  return db("user");
}

function findUserById(id) {
  return db("user").where({ id }).first();
}

function findPosts() {
  return db("post").orderBy("id", "desc").limit(10);
}

function findPostsByUser(user_id) {
  return db("post").where({ user_id });
}

