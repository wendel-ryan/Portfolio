import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'
import Logo from './img/Logo(white).png'

const Navbar = () => {
  return (
    <div className='header'>
        <Link to='/'>
            <img className='Logo' src={Logo} alt='Logo'/>
        </Link>
        <ul className='nav-links'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Projects'>Projects</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>    
        </ul>    
    </div>
  )
}

export default Navbar