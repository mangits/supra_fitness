
exports.up = function(knex) {
    return knex.schema.createTable('situps_females_60_plus', table => {
        table.increments('id');
        table.integer('situps').notNullable();
        table.decimal('situps_points').notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('situps_females_60_plus');
  };
  