  
exports.up = function (knex) {
    return knex.schema
      .createTable("user", (table) => {
        table.increments();
        table.string("name").notNullable().index();
        table.text("email").notNullable();
        table.datetime("created_at").defaultTo(knex.fn.now());
      })
      .createTable("post", (table) => {
        table.increments();
        table.string("display_name").notNullable();
        table.text("body").notNullable();
        table.datetime("created_at").defaultTo(knex.fn.now());
        table.integer("user_id").unsigned();
        table
          .foreign("user_id")
          .references("user.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("user").dropTableIfExists("post");
  };