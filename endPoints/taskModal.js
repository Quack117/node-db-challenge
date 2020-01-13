const db = require("../database/dbConfig.js");

const find = () => {
  return db("Task");
};

const findBy = filter => {
  return db("Task").where(filter);
};

const findById = id => {
  return db("Task")
    .where({ id })
    .first();
};

const add = async user => {
  const [id] = await db("Task").insert(user, "id");
  return db("Task")
    .where({ id })
    .first();
};

function update(id, Task) {
  return db('Task')
    .where('id', Number(id))
    .update(Task);
}


const remove = id => {
  return db("Task")
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
