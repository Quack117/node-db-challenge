const db = require("../database/dbConfig.js");

const find = () => {
  return db("Resource");
};

const findBy = filter => {
  return db("Resource").where(filter);
};

const findById = id => {
  return db("Resource")
    .where({ id })
    .first();
};

const add = async user => {
  const [id] = await db("Resource").insert(user, "id");
  return db("Resource")
    .where({ id })
    .first();
};

function update(id, Resource) {
  return db('Resource')
    .where('id', Number(id))
    .update(Resource);
}


const remove = id => {
  return db("Resource")
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
