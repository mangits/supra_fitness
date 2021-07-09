import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './WorkoutOfTheDay.css'
import { Typography } from '@material-ui/core';

const _ = require('lodash');

function WorkoutOfTheDay () {

    let [workoutName, setWorkoutName] = useState('')
    let [workoutDescription, setWorkoutDescription] = useState('')
    let [workoutMovements, setWorkoutMovements] = useState([])
    let [workoutSets, setWorkoutSets] = useState([])
    let [workoutReps, setWorkoutReps] = useState([])

    function createData(workoutMovement, workoutSet, workoutRep) {
        return {workoutMovement, workoutSet, workoutRep};
    }

    function createRows(workoutMovements, workoutSets, workoutReps) {
        let result = []
        for (let i = 0; i < workoutMovements.length; i++) {
            result.push(createData(workoutMovements[i], workoutSets[i], workoutReps[i]))
        }
        return result;
    }


    
  useEffect(() => {
    async function getRandomWorkout() {
        let workout = await fetch('http://localhost:3001/workout')
        .then((data) => data.json())
        .then((data) => data[0])
        .then((data) => {

            setWorkoutName(_.startCase(data.workout_name))
            setWorkoutDescription(_.upperFirst(`${data.description}.`))
            setWorkoutMovements(data.movement_ids.map(id => _.startCase(id)))
            setWorkoutSets(data.sets)
            setWorkoutReps(data.reps)
        })

        return workout;
    }

    getRandomWorkout()
  },[])

  return (
    <div className="WODContainer">
        <Typography className="WODTitle" variant="h3">Workout of the Day</Typography>
        <Typography className="WODSubTitle" variant="h4">{workoutName}</Typography>
        <TableContainer component={Paper} className="WODTable">
        <Table aria-label="caption table">
            <caption>{workoutDescription}</caption>
            <TableHead>
            <TableRow>
                <TableCell><strong>Movements</strong></TableCell>
                <TableCell align="right"><strong>Sets</strong></TableCell>
                <TableCell align="right"><strong>Repetitions</strong></TableCell>
            </TableRow>
            {createRows(workoutMovements, workoutSets, workoutReps).map((result) => (
                <TableRow>
                    <TableCell>{result.workoutMovement}</TableCell>
                    <TableCell align="right">{result.workoutSet}</TableCell>
                    <TableCell align="right">{result.workoutRep}</TableCell>
                </TableRow>
            ))}
            </TableHead>
        </Table>
        </TableContainer>
    </div>
  );
}

export default WorkoutOfTheDay;