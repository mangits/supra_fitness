
exports.up = function(knex) {
  return knex.schema.createTable('workouts', table => {
      table.increments('id');
      table.string('workout_name').notNullable();
      table.string('description').notNullable();
      table.specificType('movement_ids', 'INT[]')
      table.specificType('sets', 'INT[]')
      table.specificType('reps', 'INT[]')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('workouts');
};
