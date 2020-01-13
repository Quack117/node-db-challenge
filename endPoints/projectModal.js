const db = require("../database/dbConfig.js");

const find = () => {
  return db("Projects");
};

const findBy = filter => {
  return db("Projects").where(filter);
};

const findById = id => {
  return db("Projects")
    .where({ id })
    .first();
};

const add = async user => {
  const [id] = await db("Projects").insert(user, "id");
  return db("Projects")
    .where({ id })
    .first();
};

function update(id, Projects) {
  return db('Projects')
    .where('id', Number(id))
    .update(Projects);
}


const remove = id => {
  return db("Projects")
    .where({ id })
    .del();
};

module.exports = {
  find,
  findBy,
  findById,
  add,
  remove,
  update
};
