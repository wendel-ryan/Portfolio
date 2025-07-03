import React from 'react'
import "../Components/styles/Skill.css"

const Skill = (props) => {
  return (
    <div className='skill'><h3>{props.skill}</h3></div>
  )
}

export default Skill