import React from 'react'
import './styles/Divider.css'


const Divider = (props) => {
  return (
    <div className='divider' id={props.idName}>
      <span className='title' id={props.text}>{props.title}</span>
      <div className={"separator "+props.bottom}></div>
    </div>
  )
}

export default Divider