
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('run_males_24_below').del()
    .then(function () {
      // Inserts seed entries
      return knex('run_males_24_below').insert([
        {run: 552, health_risk_category: 'low-risk', run_points: 60.0},
        {run: 574, health_risk_category: 'low-risk', run_points: 59.5},
        {run: 585, health_risk_category: 'low-risk', run_points: 59.0},
        {run: 598, health_risk_category: 'low-risk', run_points: 58.5},
        {run: 610, health_risk_category: 'low-risk', run_points: 58.0},
        {run: 623, health_risk_category: 'low-risk', run_points: 57.5},
        {run: 637, health_risk_category: 'low-risk', run_points: 57.0},
        {run: 651, health_risk_category: 'low-risk', run_points: 56.5},
        {run: 666, health_risk_category: 'low-risk', run_points: 56.0},
        {run: 682, health_risk_category: 'low-risk', run_points: 55.5},
        {run: 698, health_risk_category: 'low-risk', run_points: 55.0},
        {run: 716, health_risk_category: 'low-risk', run_points: 54.5},
        {run: 734, health_risk_category: 'low-risk', run_points: 54.0},
        {run: 753, health_risk_category: 'low-risk', run_points: 53.5},
        {run: 773, health_risk_category: 'moderate-risk', run_points: 52.0},
        {run: 794, health_risk_category: 'moderate-risk', run_points: 50.5},
        {run: 816, health_risk_category: 'moderate-risk', run_points: 49.0},
        {run: 840, health_risk_category: 'high-risk', run_points: 46.5},
        {run: 865, health_risk_category: 'high-risk', run_points: 44.0},
        {run: 892, health_risk_category: 'high-risk', run_points: 41.0},
        {run: 920, health_risk_category: 'high-risk', run_points: 38.0},
        {run: 950, health_risk_category: 'high-risk', run_points: 35.0}
      ]);
    });
};
// table.increments('id');
// table.integer('run').notNullable();
// table.string('health_risk_category').notNullable();
// table.decimal('run_points', 3).notNullable();