
exports.up = function(knex) {
  return knex.schema.createTable("Resource", resource => {
    resource.increments()

    resource
        .string("Name", 255)
        .unique()
        .notNullable()
        

    resource.string("Description")
        .notNullable()

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Resource");
};
