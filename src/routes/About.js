import React from "react";
import "./styles/About.css";
import Skill from "../Components/Skill"
import Headshot from "../Components/img/headshot-black.png"

const About = () => {

  const text = `I am a junior software developer based out 
  of Mason City, Iowa. My passion for coding comes from an interest in engineering 
  and a love for technology. I love the process of finding a solution to any problem, 
  so when I was first introduced to coding, I instantly fell in love with computer 
  science. I am facinated by the process of desyphering code that has been written by 
  others, and I enjoy the challenge of transfering the solution to a problem from 
  thought or paper into code. I look forward to finding my place in the working world, and 
  developing my skills as both a software developer and a team member within an 
  organization.`;

  const skills = ["Python", "React.JS", "Java","JavaScript", "MySQL", "SQLite",
    "SQLAlchemy","GitHub","Web Scraping", "Algorithms", "Math", "HTML & CSS", 
    "API's", "Hardware","Logic","Pytest", "Selenium", "Windows", "Linux", 
    "Documentation", "Leadership","File Management"
  ]

  return (
    <section className="about-page">
      <div className="about-info">
        <div className="portfolio">
          <img className="headshot-black" src={Headshot} alt="none"></img>
          <div className="bio">
            <h3>{text}</h3>
          </div>
        </div>
        <div className="skills">
          {skills.map((x) =>
            <Skill skill={x}/>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
