import { useState } from 'react'
import Button from '@material-ui/core/Button';
import PTForm from './PTForm.js'
// import Timer from './Timer.js'
import OFTContext from '../context/OFTContext.js';
import './OFT.css'

function OfficialFitnessTest () {
  const [page, setPage] = useState(1);
  const [id, setId] = useState(1)
  const [memberForms, setMemberForm] = useState([{id}])
  

  const addMember = () => {
    setId(id + 1)
    setMemberForm([...memberForms, id])
  }

  const removeMember = () => {
    setId(id - 1)
    let tempArray = memberForms
    console.log(tempArray)
    // console.log(id)
    tempArray.splice(id-2, 1)
    console.log(tempArray)
    setMemberForm(tempArray)
  }

  let section_title = [
    "Register Members",
    "Input Height & Weight",
    "Input Situps & Pushups",
    "Track Run",
    "Member Scores and Sign"
  ]

  const nextPage = (e) => {
    e.preventDefault()
    setPage(page + 1)
    console.log('nextButton', page)
  }
  
  const prevPage = (e) => {
    e.preventDefault()
    setPage(page - 1)
    console.log('prevButton', page)
  }

return (
  <OFTContext.Provider value={{page}}>
    <div className="OFTContainer">
      <div className="OFTContainerTitle">
        <h1>{section_title[page -1]}</h1>
      </div>
      {(page === 4) ?
        <>
          {/* <Timer /> */}
        </> : <></>
      }
      {memberForms.map(form=>{ 
        return <PTForm id={id} page={page} />})}
      <div className="plusAndMinusButtons">
      {(memberForms.length > 1 && page === 1 && memberForms.length < 12) ?
          <img height='20' onClick={()=>removeMember()} src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/282/minus_2796.png' alt='minus'/>
        : <></>
      }
      {(page === 1 && memberForms.length < 12) ?
      <img height='20' onClick={()=>addMember()} src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/282/plus_2795.png" alt='plus'/>
      : <></>
      }
      </div>
        <div className="prevAndNextButtons">
      {(page >= 2) ?
          <Button variant="contained" color="primary" onClick={(e)=>{prevPage(e)}}>Prev</Button>
         : <></>
      }
      {(page < 5) ?
          <Button variant="contained" color="primary" onClick={(e)=>{nextPage(e)}}>Next</Button>
         : <></>
      }
        </div>
    </div>
  </OFTContext.Provider>
)
}
export default OfficialFitnessTest;