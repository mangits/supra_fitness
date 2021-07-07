
exports.up = function(knex) {
    return knex.schema.createTable('pushups_males_60_plus', table => {
        table.increments('id');
        table.integer('pushups').notNullable();
        table.decimal('pushups_points', 3).notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pushups_males_60_plus');
  };
  