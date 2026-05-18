import React from "react";
import "./styles/Projects.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Project from "../Components/Project";
import BJ1 from "../Components/img/BJ1.png";
import BJ2 from "../Components/img/BJ2.png";
import fantasy1 from "../Components/img/Fantasy1.jpg";
import fantasy2 from "../Components/img/Fantasy1.jpg";
import fantasy3 from "../Components/img/Fantasy1.jpg";

const Projects = () => {
  const Fantasytxt = `Built a full‑stack fantasy football web application featuring user 
  authentication, automated data collection, and interactive draft‑planning tools. Implemented 
  a secure login system with duplicate‑account prevention and password‑strength validation. 
  Used Selenium to scrape player statistics and expert rankings from multiple sources, storing 
  normalized data in an SQLite database. Generated aggregated player rankings and provided tools 
  for highlighting preferred players, comparing multiple players side‑by‑side, and viewing 
  historical team and player performance. Added a customizable draft simulator that uses league 
  settings to help users predict draft outcomes and track picks in real time.`;

  const BJtxt = `Developed an interactive blackjack simulator that recreates a casino‑style gameplay
   experience using React.js. Implemented full blackjack rules including hit, stand, double, and split 
   actions, along with dealer logic and multi‑hand simulation. Integrated the Deck of Cards API to generate 
   real card data and built a balance‑tracking system that allows users to set a starting bankroll and 
   place bets each round. Simulated a full blackjack table with the dealer and two additional players, 
   enabling realistic game flow and state transitions.`;

  const Websitetxt = `Developed a fully responsive personal portfolio website featuring a dynamic 
  About Me section, an interactive skills overview, and a projects showcase that includes a playable 
  blackjack demo built with React. Implemented a contact form powered by EmailJS to allow visitors 
  to send messages directly to my inbox. Designed the site with a clean layout, reusable components, 
  and smooth navigation to highlight professional experience and technical strengths.`;

  function forwardProject() {
    if (document.getElementById("website").style.display !== "none") {
      document.getElementById("website").style.display = "none";
      document.getElementById("Fantasy").style.display = "flex";
    } else if (document.getElementById("Fantasy").style.display !== "none") {
      document.getElementById("Fantasy").style.display = "none";
      document.getElementById("BJ").style.display = "flex";
    } else {
      document.getElementById("BJ").style.display = "none";
      document.getElementById("website").style.display = "flex";
    }
  }

  function backwardProject() {
    if (document.getElementById("Fantasy").style.display !== "none") {
      document.getElementById("Fantasy").style.display = "none";
      document.getElementById("website").style.display = "flex";
    } else if (document.getElementById("BJ").style.display !== "none") {
      document.getElementById("BJ").style.display = "none";
      document.getElementById("Fantasy").style.display = "flex";
    } else {
      document.getElementById("website").style.display = "none";
      document.getElementById("BJ").style.display = "flex";
    }
  }

  return (
    <section className="projects-page">
      <div className="project container row">
        <button className="left column big" onClick={backwardProject}>
          <FaChevronLeft className="arrowBig" />
        </button>
        <Project
          display={"flex"}
          id={"website"}
          CurrentIMG={false}
          text={Websitetxt}
          name={"Online Portfolio"}
        />
        <Project
          display={"none"}
          id={"Fantasy"}
          CurrentIMG={fantasy1}
          Images={[fantasy1, fantasy2, fantasy3]}
          text={Fantasytxt}
          name={"Fantasy Football Draft Assistant"}
        />
        <Project
          display={"none"}
          id={"BJ"}
          CurrentIMG={BJ1}
          Images={[BJ1, BJ2]}
          text={BJtxt}
          name={"Card Game Simulator"}
        />
        <button className="right column big" onClick={forwardProject}>
          <FaChevronRight className="arrowBig" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
