
exports.up = function(knex) {
    return knex.schema.createTable('run_females_54', table => {
        table.increments('id');
        table.integer('run').notNullable();
        table.string('health_risk_category').notNullable();
        table.decimal('run_points').notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('run_females_54');
  };
  