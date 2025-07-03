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
  const Fantasytxt = `A Python Flask application that assists the user in drafting 
  a fantasy football team by allowing them to compare different projection sources 
  while following along with their draft. Each year, multiple sources generate
  fantasy football projections, and while they are very similar in many ways, even 
  small rankings discrepencies can have major implications. The application utilizes 
  selenium, Pandas, SQL Alchemy, and SQLite to collect and store fantasy football projections 
  from different sources before generating an average set of rankings. The user can
  then follow along with their draft while being able to view the rankings that their
  league can view, as well ass the industy averages as well as alternate sources. The 
  application also allows the user to access and compare stats from previous seasons 
  for each team and player.`;

  const BJtxt = `A React.JS application that simulates playing Blackjack by using 
  the Deck of Cards API (deckofcardsapi.com). This project is still in development, 
  but future plans include a feature to help the user learn to count cards, make 
  informed decisions based off of the cards on the table, manage a balance, count 
  wins/losses, and help teach the user how to tip the odds in their favor. 
  Additionally I would like to add other card games and/or games that might be played in a casino.`;

  const Websitetxt = `A React.JS application that is hosted on Hostinger. Within the 
  website visitors can find a brief section about me, a recent projects page with some
  of my recent work, a link to my github and my resume, and a form to get ahold of me 
  externally powered by email.JS. Additionally, he website is frequently tested using
   Selenium to ensure it's operational status.`;

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
