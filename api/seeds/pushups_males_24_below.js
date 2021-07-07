
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pushups_males_24_below').del()
    .then(function () {
      // Inserts seed entries
      return knex('pushups_males_24_below').insert([
        {pushups: 67, pushups_points: 20.0},
        {pushups: 66, pushups_points: 19.8},
        {pushups: 65, pushups_points: 19.6},
        {pushups: 64, pushups_points: 19.4},
        {pushups: 63, pushups_points: 19.2},
        {pushups: 62, pushups_points: 19.0},
        {pushups: 61, pushups_points: 18.8},
        {pushups: 60, pushups_points: 18.6},
        {pushups: 59, pushups_points: 18.4},
        {pushups: 58, pushups_points: 18.2},
        {pushups: 57, pushups_points: 18.0},
        {pushups: 56, pushups_points: 17.8},
        {pushups: 55, pushups_points: 17.7},
        {pushups: 54, pushups_points: 17.6},
        {pushups: 53, pushups_points: 17.4},
        {pushups: 52, pushups_points: 17.2},
        {pushups: 51, pushups_points: 17.0},
        {pushups: 50, pushups_points: 16.8},
        {pushups: 49, pushups_points: 16.6},
        {pushups: 48, pushups_points: 16.2},
        {pushups: 47, pushups_points: 16.0},
        {pushups: 46, pushups_points: 15.6},
        {pushups: 45, pushups_points: 15.4},
        {pushups: 44, pushups_points: 15.0},
        {pushups: 43, pushups_points: 14.6},
        {pushups: 42, pushups_points: 14.4},
        {pushups: 41, pushups_points: 14.0},
        {pushups: 40, pushups_points: 13.6},
        {pushups: 39, pushups_points: 13.0},
        {pushups: 38, pushups_points: 12.6},
        {pushups: 37, pushups_points: 12.0},
        {pushups: 36, pushups_points: 11.6},
        {pushups: 35, pushups_points: 11.0},
        {pushups: 34, pushups_points: 10.6},
        {pushups: 33, pushups_points: 10.0},
        {pushups: 32, pushups_points: 7.0},
        {pushups: 31, pushups_points: 4.0},
        {pushups: 30, pushups_points: 1.0},
      ]);
    });
};