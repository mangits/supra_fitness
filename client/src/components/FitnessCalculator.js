import React, { useState, useContext } from 'react';
import './FitnessCalculator.css'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppContext from '../context/AppContext.js'

function FitnessCalculator () {
  const { ScoreCalculator } = useContext(AppContext)
  const [results, setResults] = useState([])
  const [userData, setUserData] = useState({})

  function handleChange (event) {
    setUserData({
      name: (event.target.form.name) ? event.target.form.name.value : '',
      gender: (event.target.form.gender) ? event.target.form.gender.value : '',
      age: (event.target.form.age) ? event.target.form.age.value : '',
      weight: (event.target.form.weight) ? event.target.form.weight.value : 0,
      height: (event.target.form.height) ? event.target.form.height.value : 0,
      pushups: (event.target.form.pushups) ? event.target.form.pushups.value : 0,
      situps: (event.target.form.situps) ? event.target.form.situps.value : 0,
      runTime: (event.target.form.run_min && event.target.form.run_sec) ? Number((event.target.form.run_min.value*60)) + Number(event.target.form.run_sec.value) : 0
    })
    // console.log(userData)
  }

  async function handleSubmit (event) {

    event.preventDefault()
    
    console.log(userData)
    let URL = `http://localhost:3001/scores?gender=${userData.gender.toLowerCase()}&&age=${userData.age}&&raw='true'`
    let scoreInfo = await fetch(URL)
      .then(response=>response.json())
      .then(data=>{ return data })
    
    ScoreCalculator(scoreInfo, userData, setResults)
  }

  return (
      <div className="FitnessCalculator">
        <Typography variant="h5" gutterBottom className="fitnessFormInstruction">
          Enter your information:
        </Typography>
        <form className="FitnessForm classes.root" onChange={(e)=>{handleChange(e)}} onSubmit={(e)=>{handleSubmit(e)}}>
        <div className="groupInput">
          <TextField label="Name" name='name' className="groupField" />
          <TextField label="Age" name='age' className="groupField" required />
        </div>
        <TextField align='left' label="Gender" name='gender' select required> 
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </TextField>
        <div className="groupInput" >
          <TextField label="Height (in)" name='height' className="groupField" />
          <TextField label="Weight (lbs) " name='weight' className="groupField" />
        </div>
        <div className="groupInput" >   
          <TextField label="Push-ups" name='pushups'  className="groupField" required/>
          <TextField label="Sit-ups"  name='situps' className="groupField" required/>
        </div>
        <div className="groupInput" >
          <TextField label="Run time minutes" name='run_min' className="groupField" required/>
        <  TextField label="Run time seconds" className="groupField groupFieldRight" name='run_sec' align='center' required/>
        </div>
        <div className="buttonInput">
        <Button type='submit' variant="contained" color="primary" className="submitButton">Submit</Button>
        <Button type='reset' onClick={()=>setResults([])}variant="contained" color="secondary">Reset</Button>
        </div>
        <div>{results}</div>
      </form>
    </div>
  )
}

export default FitnessCalculator;