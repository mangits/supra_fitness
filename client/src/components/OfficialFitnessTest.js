import { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import PTForm from './PTForm.js'

function OfficialFitnessTest () {
  const [page, setPage] = useState(1);
  const [memberForms, setMemberForm] = useState([])
  const [id, setId] = useState(0)

  const addMember = () => {
    setId(id + 1)
    setMemberForm(memberForms.push(<PTForm id={id}/>))
  }

  useEffect(()=>{
    addMember()
  }, [])

  const removeMember = () => {
    setId(id - 1)
    setMemberForm(memberForms.pop())
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
  }
  
  const prevPage = (e) => {
    e.preventDefault()
    setPage(page - 1)
  }

return (
  <div>
    {section_title[page -1]}
    {memberForms}
    <img onClick={()=>removeMember()} src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/282/minus_2796.png' alt='minus'/>
    <img onClick={()=>addMember()} src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/282/plus_2795.png" alt='plus'/>
    <Button onClick={(e)=>{prevPage(e)}}> </Button>
    <Button onClick={(e)=>{nextPage(e)}}> </Button>
  </div>
)
}
export default OfficialFitnessTest;