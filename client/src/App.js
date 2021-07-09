import './App.css';
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FitnessCalculator from './components/FitnessCalculator.js';
import Documentation from './components/Documentation.js';
import WorkoutOfTheDay from './components/WorkoutOfTheDay.js';
import OfficialFitnessTest from './components/OfficialFitnessTest.js';
import AppPage from './components/AppPage.js';
import ResultsTable from './components/ResultsTable.js';
import AppContext from './context/AppContext.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ScoreCalculator (scoreObj, userObj, resultsSetter) {

  let pushupPoints = {
   name: 'Pushups',
   amount: userObj.pushups,
   score: 0,
   total: 20,
   result: ''
  }

      let situpPoints = {
   name: 'Situps',
   amount: userObj.situps,
   score: 0,
   total: 20,
   result: ''
  }

      let runPoints = {
   name: 'Run',
   amount: userObj.runTime,
   score: 0,
   total: 60,
   result: ''
  }

  if((userObj.pushups > scoreObj.pushups_scores[0].pushups)) {
     pushupPoints.score = 20
    pushupPoints.result = 'PASS'
  } else {
    let data = scoreObj.pushups_scores.filter(score => {
      return Number(score.pushups) === Number(userObj.pushups)})
    if (data.length === 0) {
      pushupPoints.result = 'FAIL'
    } else {
      pushupPoints.score = Number(data[0].pushups_points)
      pushupPoints.result = 'PASS'
    }
  }

  if((userObj.situps > scoreObj.situps_scores[0].situps)) {
    situpPoints.score = 20
    situpPoints.result = 'PASS'
  } else {
    let data = scoreObj.situps_scores.filter(score => {
      return Number(score.situps) === Number(userObj.situps)})
    if (data.length === 0) {
      situpPoints.result = 'FAIL'
    } else {
      situpPoints.score = Number(data[0].situps_points)
      situpPoints.result = 'PASS'
    }
  }

  if ((userObj.runTime < scoreObj.run_scores[0].run)) {
    runPoints.score = 60
    runPoints.result = 'PASS'
  } else {
    let runArray = scoreObj.run_scores
    for (let i = 0; i < runArray.length; i++) {
      if (Number(userObj.runTime) <= Number(runArray[i].run)) {
        runPoints.score =  Number(runArray[i].run_points)
        runPoints.result = 'PASS'
        break;
      }
    } 
    if (runPoints.length === 0) {
      runPoints.result = 'FAIL'
    }
  }

  let totalScore = {
    score: 0,
    result: ''
  }
  totalScore.score = runPoints.score + situpPoints.score + pushupPoints.score

  if (runPoints.result === 'FAIL' || situpPoints.result === 'FAIL' || pushupPoints.result === 'FAIL') {
    totalScore.result = 'UNSATISFACTORY'
  } else if (totalScore.score < 75) {
    totalScore.result = 'UNSATISFACTORY'
  } else if (totalScore.score < 90) {
    totalScore.result = 'SATISFACTORY'
  } else {
    totalScore.result = 'EXCELLENT'
  }

  let components = [runPoints, pushupPoints, situpPoints]
  
  resultsSetter(<ResultsTable componentsData={components} total={totalScore}/>)
}

function App() {
  const classes = useStyles();

  return (
    <AppContext.Provider value={{ScoreCalculator}}>
      <Router>
        <div className="App">
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon/>
                </IconButton>
                <Typography variant="h4" className={classes.title}>
                  <Link to='/' style={{textDecoration: 'none', color: 'white'}}>Supra Fitness</Link>
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
            </div>
            <Switch>
              <Route exact path="/"><AppPage/></Route>
              <Route exact path="/Fitness Calculator"><FitnessCalculator/></Route>
              <Route exact path="/Official Fitness Test"><OfficialFitnessTest/></Route>
              <Route exact path="/Documentation"><Documentation/></Route>
              <Route exact path="/Workout Of The Day"><WorkoutOfTheDay/></Route>
            </Switch>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
