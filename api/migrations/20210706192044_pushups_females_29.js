
exports.up = function(knex) {
    return knex.schema.createTable('pushups_females_29', table => {
        table.increments('id');
        table.integer('pushups').notNullable();
        table.decimal('pushups_points', 3).notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pushups_females_29');
  };
  