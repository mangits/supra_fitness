import React, { useState, useEffect, useContext } from 'react';
import './FitnessCalculator.css'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SignatureCanvas from 'react-signature-canvas'
import AppContext from '../context/AppContext.js'

function PTForm ({ page, id }) {
  const { ScoreCalculator } = useContext(AppContext)
  const [userData, setUserData] = useState({})
  const [results, setResults] = useState([])
  const [flag, setFlag] = useState(false)
  const [submitFlag, setSubmitFlag] = useState(false)

  function handleChange (event) {
    setUserData({
      name: (event.target.form.name) ? event.target.form.name.value : 'Enter Member Info',
      gender: (event.target.form.gender) ? event.target.form.gender.value : '',
      age: (event.target.form.age) ? event.target.form.age.value : '',
      weight: (event.target.form.weight) ? event.target.form.weight.value : 0,
      height: (event.target.form.height) ? event.target.form.height.value : 0,
      pushups: (event.target.form.pushups) ? event.target.form.pushups.value : 0,
      situps: (event.target.form.situps) ? event.target.form.situps.value : 0,
      runTime: (event.target.form.run_min && event.target.form.run_sec) ? Number((event.target.form.run_min.value*60)) + Number(event.target.form.run_sec.value) : 0
    })
  }

  if (page === 5 && !flag) {
    setFlag(true)
  }

  console.log(page, id)

  function handleClick(event) {
    event.preventDefault()
    let URL = `http://localhost:3001/results`
    let data = {
      userData: userData,
      results: results
    }
    //fetch(URL, 
    //{
    //  POST
    //  data
    //})
    setSubmitFlag(true)
  }

  useEffect(() => {
    async function fetchData () {
    let URL = `http://localhost:3001/scores?gender=${userData.gender.toLowerCase()}&&age=${userData.age}&&raw='true'`
    let scoreInfo = await fetch(URL)
      .then(response=>response.json())
      .then(data=>{ return data })

    ScoreCalculator(scoreInfo, userData, setResults)
    }
    fetchData()
  }, [flag])

  return (
    <div className="FitnessCalculator">
      <Typography variant="h5" gutterBottom className="fitnessFormInstruction">
      {userData.name}:
      </Typography>
      <form className="FitnessForm classes.root" onChange={(e)=>{handleChange(e)}}>
        {(page === 1) ?
        <>
          <div className="groupInput">
          <TextField label="Name" name='name' className="groupField" />
          <TextField label="Age" name='age' className="groupField" required />
          </div>
          <TextField align='left' label="Gender" name='gender' select required> 
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </TextField>
        </> : <></>
        }
        {(page === 2) ?
        <>
          <div className="groupInput" >
            <TextField label="Height (in)" name='height' className="groupField" />
            <TextField label="Weight (lbs) " name='weight' className="groupField" />
          </div>
        </> : <></>
        }
        {(page === 3) ?
        <>
          <div className="groupInput" >   
            <TextField label="Push-ups" name='pushups'  className="groupField" required/>
            <TextField label="Sit-ups"  name='situps' className="groupField" required/>
          </div>
        </> : <></>
        }
        {(page === 4) ?
        <>
          <div className="groupInput" >
            <TextField label="Run time minutes" name='run_min' className="groupField" required/>
            <TextField label="Run time seconds" className="groupField groupFieldRight" name='run_sec' align='center' required/>
          </div>
        </> : <></>
        }
        {(page === 5) ?
        <>
          {(submitFlag) ?
              <div>
                <p>You submitted the member's Score</p>
              </div> :
          <>
            <div>{results}</div>
            <SignatureCanvas penColor='green'
            canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} />
            <Button onClick={(e)=>handleClick(e)}color="primary">Submit Results</Button>
          </>}
        </> : <></>
        }
      </form>
    </div>
  )
}

export default PTForm;