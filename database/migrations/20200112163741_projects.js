
exports.up = function(knex) {
  return knex.schema.createTable("Projects", project => {
      project.increments();

      project
        .string("Project Name", 255)
        .notNullable()

      project
        .string("Description", 255)

      project
        .boolean("Completed")
        .defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Projects");
};
