import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react'
import './styles/Navbar.css'
import Logo from './img/Logo(black).png'

const Navbar = () => {

  const navRef = useRef();

  const showNavbar = ( ) => {
      navRef.current.classList.toggle('responsive-nav')
  }

  return (
    <header className='header' ref={navRef}>
        <nav className='nav' id='nav'>
            <ul className='nav-links'>
                <li className='link' onClick={showNavbar}><HashLink to='/#Home'>Home</HashLink></li>
                <li className='link' onClick={showNavbar}><HashLink to='/#About'>About Me</HashLink></li>
                <li className='img'><img className='Logo' src={Logo} alt='Logo'/></li>
                <li className='link' onClick={showNavbar}><HashLink to='/#Projects'>Recent Projects</HashLink></li>
                <li className='link' onClick={showNavbar}><HashLink to='/#Contact'>Contact</HashLink></li>    
            </ul>
        </nav>
        <button className='nav-close-btn' onClick={showNavbar}>
            <FaTimes className='x'/>
        </button>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars className='bars' />
        </button> 
    </header>
  )
}

export default Navbar