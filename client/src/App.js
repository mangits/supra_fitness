import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FitnessCalculator from './components/FitnessCalculator.js';
import Documentation from './components/Documentation.js';
import AppPage from './components/AppPage.js';

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

function App() {
  const classes = useStyles();

  return (
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
            <Route exact path="/Official Fitness Test"><FitnessCalculator/></Route>
            <Route exact path="/Documentation"><Documentation/></Route>

          </Switch>
      </div>
    </Router>
  );
}

export default App;
