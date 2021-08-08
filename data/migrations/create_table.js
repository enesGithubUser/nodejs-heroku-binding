  
exports.up = function (knex) {
    return knex.schema
      .createTable("user", (table) => {
        table.increments();
        table.string("name").notNullable().index();
        table.text("email").notNullable();
        table.datetime("created_at").defaultTo(knex.fn.now());
      });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("user").dropTableIfExists("post");
  };