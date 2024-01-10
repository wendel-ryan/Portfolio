import React from 'react'
import Navbar from '../Components/Navbar'
import './styles/Home.css'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className='home-page'>
        <div className='home-content'>
          <div className='home-text'></div>
        </div>
      </section>
    </div>
  )
}

export default Home