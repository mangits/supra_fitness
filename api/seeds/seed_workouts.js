exports.seed = function(knex) {
  return knex('workouts').del()
      .then(function () {
          return knex('workouts').insert([
              {workout_name: 'curl complex',
               description: 'curl until you die',
               movement_ids: [20,21,22,23,24,25,26],
               sets: [3,3,3,3,3,3,3],
               reps: [10,10,10,10,10,10,10]},
              {workout_name: 'leg day',
               description: 'squat until you die',
               movement_ids: [4,11,15,8],
               sets: [4,4,4,4],
               reps: [10,10,10,10]},
          ]);
      });
};

