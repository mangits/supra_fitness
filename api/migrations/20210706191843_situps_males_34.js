

exports.up = function(knex) {
    return knex.schema.createTable('situps_males_34', table => {
      table.increments('id');
      table.integer('situps').notNullable();
      table.decimal('situps_points', 3).notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('situps_males_34');
  };
  