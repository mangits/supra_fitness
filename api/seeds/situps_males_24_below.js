
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('situps_males_24_below').del()
    .then(function () {
      // Inserts seed entries
      return knex('situps_males_24_below').insert([
        {situps: 58, situps_points: 20.0},
        {situps: 57, situps_points: 19.7},
        {situps: 56, situps_points: 19.4},
        {situps: 55, situps_points: 19.0},
        {situps: 54, situps_points: 18.8},
        {situps: 53, situps_points: 18.4},
        {situps: 52, situps_points: 18.0},
        {situps: 51, situps_points: 17.6},
        {situps: 50, situps_points: 17.4},
        {situps: 49, situps_points: 17.0},
        {situps: 48, situps_points: 16.6},
        {situps: 47, situps_points: 16.0},
        {situps: 46, situps_points: 15.0},
        {situps: 45, situps_points: 14.0},
        {situps: 44, situps_points: 13.0},
        {situps: 43, situps_points: 12.6},
        {situps: 42, situps_points: 12.0},
        {situps: 41, situps_points: 9.0},
        {situps: 40, situps_points: 6.0},
        {situps: 39, situps_points: 3.0},
      ]);
    });
};
