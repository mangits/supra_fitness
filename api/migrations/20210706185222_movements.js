
exports.up = function(knex) {
  return knex.schema.createTable('movements', table => {
      table.integer('id');
      table.string('movement_name').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('movements');
};
