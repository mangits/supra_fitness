var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require('./routes/testAPI');
const { query } = require('express');

var knex = require('knex')(require('./knexfile.js')['development']);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);

app.get('/scores', function(req, res) {

  async function getScores() {

    let genders = ['male', 'female']
    let ages = [24, 29, 34, 39, 44, 49, 54, 59, 60]
    
    let results = {
      male: {
        24: {},
        29: {},
        34: {},
        39: {},
        44: {},
        49: {},
        54: {},
        59: {},
        60: {}
      },
      female: {
        24: {},
        29: {},
        34: {},
        39: {},
        44: {},
        49: {},
        54: {},
        59: {},
        60: {}
      }
    }

    for (let gender of genders) {
      for (let age of ages) {
        if (age <= 24) {
          results[gender][age].run_scores = await knex.select('run', 'run_points')
            .from(`run_${gender}s_${age}_below`)
            .then(data => data)
          results[gender][age].pushups_scores = await knex.select('pushups', 'pushups_points')
            .from(`pushups_${gender}s_${age}_below`)
            .then(data => data)
          results[gender][age].situps_scores = await knex.select('situps', 'situps_points')
            .from(`situps_${gender}s_${age}_below`)
            .then(data => data)
        }
        else if (age >= 60) {
          results[gender][age].run_scores = await knex.select('run', 'run_points')
            .from(`run_${gender}s_${age}_plus`)
            .then(data => data)
          results[gender][age].pushups_scores = await knex.select('pushups', 'pushups_points')
            .from(`pushups_${gender}s_${age}_plus`)
            .then(data => data)
          results[gender][age].situps_scores = await knex.select('situps', 'situps_points')
            .from(`situps_${gender}s_${age}_plus`)
            .then(data => data)
        }
        else {
          results[gender][age].run_scores = await knex.select('run', 'run_points')
            .from(`run_${gender}s_${age}`)
            .then(data => data)
          results[gender][age].pushups_scores = await knex.select('pushups', 'pushups_points')
            .from(`pushups_${gender}s_${age}`)
            .then(data => data)
          results[gender][age].situps_scores = await knex.select('situps', 'situps_points')
            .from(`situps_${gender}s_${age}`)
            .then(data => data)
        }
      }
    }
    
    // Filter out categories (pushups, run, or situps)
    if (req.query.category) {
      for (let gender of genders) {
        for (let age of ages) {
          for (let category in results[gender][age]){
            if(req.query.category === 'run'){
                delete results[gender][age].pushups_scores
                delete results[gender][age].situps_scores
            } else if (req.query.category === 'pushups') {
                delete results[gender][age].situps_scores
                delete results[gender][age].run_scores
            } else if (req.query.category === 'situps') {
                delete results[gender][age].run_scores
                delete results[gender][age].pushups_scores
            }
          }
        }
      }
    }
    
    // Filter out age groups
    if (req.query.age) {
      let ageToCheck = ages.filter(age => age >= Number.parseInt(req.query.age)).shift()
      for (let gender of genders) {
        for (let age of ages) {
          if (age !== ageToCheck) {
            delete results[gender][age]
          }
        }
      }
    }
    
    // Filter out sexes
    if (req.query.gender) {
      for (let gender of genders) {
        if (gender !== req.query.gender) {
          delete results[gender]
        }
      }
    }
    
    // Simplify object being received
    if (req.query.gender && req.query.age && req.query.raw) {
      if (!req.query.category) {
        for (let gender in results) {
          for (let age in results[gender]) {
            results = {...results[gender][age]}
          }
        }
      } else {
        for (let gender in results) {
          for (let age in results[gender]) {
            for (let category in results[gender][age]) {
              results = [...results[gender][age][category]]
            }
          }
        }
      }        
    }

    return results
  }

  getScores()
    .then(data => res.status(200).json(data))
})

app.get('/workout', function (req, res) {

  async function getWorkout() {
  
  let workout = await knex.select('*')
                          .from('workouts')
                          .orderByRaw('RANDOM()')
                          .limit(1)

  let movements = await knex.select('*')
                            .from('movements')

  for (i=0; i < workout[0].movement_ids.length; i++) {
    for (j=0; j < movements.length; j++) {

      if (workout[0].movement_ids[i] === movements[j].id) {
        workout[0].movement_ids[i] = movements[j].movement_name
      }
    }
  }
  
  return workout
  }

getWorkout().then(data => res.status(200).json(data))
            .catch(err => res.status(404).json({message: 'Take a rest day'})
)})



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;