  
exports.seed = function(knex) {
  return knex('movements').del()
      .then(function () {
          return knex('movements').insert([
              {id:1, movement_name: 'pushup'},
              {id:2, movement_name: 'situp'},
              {id:3, movement_name: 'bench press'},
              {id:4, movement_name: 'back squat'},
              {id:5, movement_name: 'deadlift'},
              {id:6, movement_name: 'burpee'},
              {id:7, movement_name: 'shoulder press'},
              {id:8, movement_name: 'leg extension'},
              {id:9, movement_name: 'hanging leg raise'},
              {id:10, movement_name: 'pullup'},
              {id:11, movement_name: 'front squat'},
              {id:12, movement_name: 'clean'},
              {id:13, movement_name: 'snatch'},
              {id:14, movement_name: 'bent over row'},
              {id:15, movement_name: 'lunge'},
              {id:16, movement_name: 'close grip bench press'},
              {id:17, movement_name: 'seated row'},
              {id:18, movement_name: 'dips'},
              {id:19, movement_name: 'tricep extension'},
              {id:20, movement_name: 'dumbbell curls'},
              {id:21, movement_name: 'preacher curls'},
              {id:22, movement_name: 'barbell curls'},
              {id:23, movement_name: 'hammer curls'},
              {id:24, movement_name: 'reverse curls'},
              {id:25, movement_name: 'concentration curls'},
              {id:26, movement_name: 'spider curls'},
          ]);
      });
};
