
exports.up = function(knex) {
  return knex.schema.createTable('situps_males_24_below', table => {
      table.increments('id');
      table.integer('situps').notNullable();
      table.decimal('situps_points').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('situps_males_24_below');
};
