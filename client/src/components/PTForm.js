import React, { useState, useEffect } from 'react';
import './FitnessCalculator.css'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function PTForm ({ page, id }) {
  const [userData, setUserData] = useState({})
  const [results, setResults] = useState([])

  console.log(page, id)

  // function handleChange (event) {
  //   setUserData({
  //     name: (event.target.form.name) ? event.target.form.name.value : '',
  //     gender: (event.target.form.gender) ? event.target.form.gender.value : '',
  //     age: (event.target.form.age) ? event.target.form.age.value : '',
  //     weight: (event.target.form.weight) ? event.target.form.weight.value : 0,
  //     height: (event.target.form.height) ? event.target.form.height.value : 0,
  //     pushups: (event.target.form.pushups) ? event.target.form.pushups.value : 0,
  //     situps: (event.target.form.situps) ? event.target.form.situps.value : 0,
  //     runTime: (event.target.form.run_min && event.target.form.run_sec) ? Number((event.target.form.run_min.value*60)) + Number(event.target.form.run_sec.value) : 0
  //   })

  return (
    <div className="FitnessCalculator">
    <Typography variant="h5" gutterBottom className="fitnessFormInstruction">
      Enter your information:
    </Typography>
    <form className="FitnessForm classes.root" >
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
    <div>{results}</div>
  </form>
</div>
  )
}

export default PTForm;