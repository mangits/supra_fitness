import React, {useState} from 'react';
// import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Documentation.css'
import FitnessTables from './FitnessTables.js'
//import bodyParser from 'body-parser';


function Documentation(){

    const useStyles = makeStyles((theme) => ({
        // root: {
        //   flexGrow: 1,
        // },
        
    }));
    const classes = useStyles();
    const [results, setResults] = useState([])

    const onClickNarrowSearch = async () => {
      let allPTData = await fetch(URL)
      .then(response => response.json())
      .then(allPTData =>{ return allPTData})
      console.log(allPTData)
  
      setResults(<FitnessTables fitnessData={allPTData}/>)
  }

    const onClickSearchAll = async () => {
        let URL = `http://localhost:3001/scores`
        let allPTData = await fetch(URL)
        .then(response => response.json())
        .then(allPTData =>{ return allPTData})
        console.log(allPTData)
    
        setResults(<FitnessTables fitnessData={allPTData}/>)
    }

    

    return (
        <div className={classes.root}>
            <Typography variant="h5" gutterBottom className="fitnessFormInstruction">
            Search Official PT Documentation
            </Typography>
            <Toolbar>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                </div>
            </div>
            <div className="searchButtons">
                <Button type='search' onClick={()=>onClickSearchAll()} variant="contained" color="green">See All Charts</Button>
                <Button type='narrow search' variant="contained" color="blue">Narrow Search</Button>
                <Button type='reset' variant="alternate" onClick={()=> {setResults([])}} color="blue">Reset</Button>
            </div>
            {results}
            </Toolbar>
        </div>
    );
}
export default Documentation;