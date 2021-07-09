  
exports.seed = function(knex) {
  return knex('movements').del()
      .then(function () {
          return knex('movements').insert([
              {movement_name: 'pushup'},
              {movement_name: 'situp'},
              {movement_name: 'bench press'},
              {movement_name: 'back squat'},
              {movement_name: 'deadlift'},
              {movement_name: 'burpee'},
              {movement_name: 'shoulder press'},
              {movement_name: 'leg extension'},
              {movement_name: 'hanging leg raise'},
              {movement_name: 'pullup'},
              {movement_name: 'front squat'},
              {movement_name: 'clean'},
              {movement_name: 'snatch'},
              {movement_name: 'bent over row'},
              {movement_name: 'lunge'},
              {movement_name: 'close grip bench press'},
              {movement_name: 'seated row'},
              {movement_name: 'dips'},
              {movement_name: 'tricep extension'},
              {movement_name: 'dumbbell curls'},
              {movement_name: 'preacher curls'},
              {movement_name: 'barbell curls'},
              {movement_name: 'hammer curls'},
              {movement_name: 'reverse curls'},
              {movement_name: 'concentration curls'},
              {movement_name: 'spider curls'},
          ]);
      });
};
