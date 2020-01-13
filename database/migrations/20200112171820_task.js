
exports.up = function(knex) {
  return knex.schema.createTable("Task", task => {
      task.increments()
      
      task
      .string("Description", 255)
      .notNullable()

      task.string("Notes", 255)

      task
      .boolean("Completed")
      .defaultTo(false)

      task
        .integer("Project_Id")
        .unsigned()
        .notNullable()
        .references('id')
        .inTable("Projects")
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("Task")
    .dropTableIfExists("Projects")
};
