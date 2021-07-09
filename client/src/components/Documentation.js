import React, { useState, useEffect} from 'react';
// import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Documentation.css';
// import FitnessTables from './FitnessTables.js';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';


function Documentation() {

    let [data, setData] = useState([])
    let [tables, setTables] = useState([])

    function createData(run, healthRisk, runPoints, pushups, pushupsPoints, situps, situpsPoints) {
        return { run, healthRisk, runPoints, pushups, pushupsPoints, situps, situpsPoints };
    }

    const createRows = (data, gender, age) => {
      console.log('createRows', data)
      console.log('createRows', gender)
      console.log('createRows', age)
        let results = []

        let runScores = data[gender][age].run_scores
        let pushupsScores = data[gender][age].pushups_scores
        let situpsScores = data[gender][age].situps_scores

        let maxLength = Math.max(runScores.length, pushupsScores.length, situpsScores.length)

        for (let i = 0; i < maxLength; i++) {
            results.push(createData(
            (runScores[i]) ? `${Math.floor(runScores[i].run/60)}:${runScores[i].run%60}` : '',
            '',
            (runScores[i]) ? runScores[i].run_points : '',
            (pushupsScores[i]) ? pushupsScores[i].pushups : '',
            (pushupsScores[i]) ? pushupsScores[i].pushups_points: '',
            (situpsScores[i]) ? situpsScores[i].situps : '',
            (situpsScores[i]) ? situpsScores[i].situps_points : ''))
        }

        return results;
    }
    const tableMaker = data => {
        let results = [];

        console.log("tablemakerdata ", data)

        for (let gender in data) {
            for (let age in data[gender]) {
                results.push(
                  <div>
                    <TableContainer component={Paper}>
                        <Table size="small" aria-label="a dense table">
                            <TableHead>
                            <TableRow>
                                <TableCell>{gender}</TableCell>
                                <TableCell align="right">{age}</TableCell>                                  
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">Run Time</TableCell>
                                <TableCell align="right">Health Risk Category</TableCell>
                                <TableCell align="right">Points</TableCell>
                                <TableCell align="right">Push-ups</TableCell>
                                <TableCell align="right">Points</TableCell>
                                <TableCell align="right">Sit-ups</TableCell>
                                <TableCell align="right">Points</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                {createRows(data, gender, age).map(row => (
                                    <TableRow>
                                        <TableCell align="right">{row.run}</TableCell>
                                        <TableCell align="right">{row.healthRisk}</TableCell>
                                        <TableCell align="right">{row.runPoints}</TableCell>
                                        <TableCell align="right">{row.pushups}</TableCell>
                                        <TableCell align="right">{row.pushupsPoints}</TableCell>
                                        <TableCell align="right">{row.situps}</TableCell>
                                        <TableCell align="right">{row.situpsPoints}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                  </div>
                )
            }
        }
        
        return results
    }

    useEffect(() => {
        const getAllScores = async () => {
            let results = await fetch('http://localhost:3001/scores')
            .then(response => response.json())
            .then(data => setData(data))
            .then(response => console.log(data))

            return results
        }
        getAllScores()
    }, [])

   useEffect(() => {
       async function getTables () {
        if(data.length !== 0) {
            console.log('second useEffect',data)
        let tempTables = await tableMaker(data)
            setTables(tempTables)
        }}
      getTables()
  }, [data])

    return (
        <div>
            <Typography variant="h5" gutterBottom className="fitnessFormInstruction">
            Search Official PT Documentation
            </Typography>
            <Toolbar>
            <div className="searchButtons">
                <Button type='search' variant="contained" color="inherent">See All Charts</Button>
                <Button type='back' variant="alternate" color="inherent">Reset</Button>
            </div>
            </Toolbar>
            {tables}
        </div>
    );
}

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// function createData(run_time, run_points, pushups, pushups_points, situps, situps_points) {
//   return { run_time, run_points, pushups, pushups_points, situps, situps_points };
// }

// function createRows(run_time, run_points, pushups, pushups_points, situps, situps_points) {
//   let result = []
//   for (let i =0; i < pushups.length; i++) {
//     result.push(createData(pushups[i], pushups_points[i]))
//   }

//   for (let i=0; i < situps.length; i++){
//     result.push(createData(situps[i], situps_points[i]))
//   }


// }


// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function FitnessTables ({ fitnessData }) {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} size="small" aria-label="a dense table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Age</TableCell>
//             <TableCell align="right">Workout</TableCell>
//             <TableCell align="right">Points</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }


export default Documentation;