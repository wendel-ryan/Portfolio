import React from 'react'
import Navbar from "../Components/Navbar";
import Home from '../routes/Home'
import Divider from '../Components/Divider';
import About from "../routes/About"
import Projects from "../routes/Projects"
import Contact from "../routes/Contact"
import "./styles/Main.css";



const Main = () => {
  return (
    <section className='page'>
      <Navbar />
      <Home />
      <Divider idName="About" bottom="black" text="white" title="About Me"/>
      <About/>
      <Divider idName="Projects" bottom="white" text="purple" title="Recent Projects"/>
      <Projects />
      <Divider idName="Contact" bottom="black" text="white" title="Contact Me"/>
      <Contact />
    </section>
  )
}

export default Main