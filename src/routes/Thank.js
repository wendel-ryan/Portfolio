import React from 'react'
import Navbar from '../Components/Navbar'
import './styles/Thank.css'
import { Link } from 'react-router-dom'


const Thank = () => {
  return (
    <section>
      <Navbar/>
      <div className='thank container'>
        <div className='thank-text column'>
          <span>Thank You!</span>
          <p>I will get back to you in the near future!</p>
          <div className='buttons row'>
            <Link to='/About'>About Me</Link>
            <Link to='/Projects'>Recent Projects</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Thank