import React, { useState, useContext } from 'react';
import './FitnessCalculator.css'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SignatureCanvas from 'react-signature-canvas'
import AppContext from '../context/AppContext.js'
import OFTContext from '../context/OFTContext';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper'

import './OFT.css'
// import useFirstRender from '../hooks/useFirstRender'

function PTForm ({ id }) {
  const { ScoreCalculator } = useContext(AppContext)
  const { page } = useContext(OFTContext)
  const [userData, setUserData] = useState({})
  const [results, setResults] = useState([])
  const [flag, setFlag] = useState(false)
  const [submitFlag, setSubmitFlag] = useState(false)

  function handleChange (event) {
    let form = event.target.form
    let tempObj = {}
      if(form.name) tempObj.name = form.name.value
      if(form.gender)  tempObj.gender = form.gender.value
      if(form.age)  tempObj.age = form.age.value
      if(form.weight)  tempObj.weight = form.weight.value
      if(form.height)  tempObj.height = form.height.value
      if (form.pushups)  tempObj.pushups = form.pushups.value
      if(form.situps) tempObj.situps = form.situps.value
      if (form.run_min && form.run_sec)  tempObj.runTime = Number((form.run_min.value*60)) + Number(form.run_sec.value)
      setUserData({...userData, ...tempObj})
    console.log('handleChange', userData)
  }

  if (page === 5 && !flag) {
    setFlag(true)
    fetchData()
  }

  async function fetchData () {
    console.log('fetchData', userData)
    let URL = `http://localhost:3001/scores?gender=${userData.gender.toLowerCase()}&&age=${userData.age}&&raw='true'`
    let scoreInfo = await fetch(URL)
      .then(response=>response.json())
      .then(data=>{ return data })

    ScoreCalculator(scoreInfo, userData, setResults)
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

  // useEffect(() => {
  //   if (!firstRender) {
  //   }
  // }, [flag])

  return (
    <div className="PTContainer">
      <Paper elevation={3}>
        <Typography className="PTName">
          <div>
          {userData.name ? `${userData.name}:` : 'Enter Member Info:'}
          </div>
        </Typography>
        <form className="PTForm" onChange={(e)=>{handleChange(e)}}>
          {(page === 1) ?
          <>
            <div className="">
            <TextField label="Name" name='name' className="groupField" />
            <TextField label="Age" name='age' className="groupField" required />
            </div>
            <TextField align='left' label="Gender" name='gender' select required> 
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </TextField>
            <TextField label="Unit" name='unit' className="groupField" required />
          </> : <></>
          }
          {(page === 2) ?
            <div className="groupInput" >
              <TextField label="Height (in)" name='height' className="groupField" />
              <TextField label="Weight (lbs) " name='weight' className="groupField" />
            </div>
          : <></>
          }
          {(page === 3) ?
            <div className="groupInput" >   
              <TextField label="Push-ups" name='pushups'  className="groupField" required/>
              <TextField label="Sit-ups"  name='situps' className="groupField" required/>
              {/* <FormControlLabel
                control={
                  <Checkbox
                    checked={checked.situps}
                    onChange={handleChange}
                    name="situpsExempt"
                    color="primary"
                  />
                }
                /> */}
            </div>
          : <></>
          }
          {(page === 4) ?
            <div className="" >
              <TextField label="Run time minutes" name='run_min' className="groupField" required/>
              <TextField label="Run time seconds" className="groupField groupFieldRight" name='run_sec' align='center' required/>
            </div>
          : <></>
          }
          {(page === 5) ?
            <>
              {(submitFlag) ?
                  <div>
                    <p>You submitted the member's Score</p>
                  </div> :
              <>
                <div>{results}</div>
                {/* <SignatureCanvas penColor='green'
                canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} /> */}
                <Button onClick={(e)=>handleClick(e)}color="primary">Submit Results</Button>
              </>}
              </> : <></>
          }
        </form>
      </Paper>
    </div>
  )
}

export default PTForm;