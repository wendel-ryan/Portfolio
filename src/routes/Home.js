import React from "react";
import "./styles/Home.css";
import Headshot from "../Components/img/headshot-white.png";

const Home = () => {
  return (
    <section className="home-page" id="Home">
      <div className="home-content row">
        <div className="home-text column">
          <div className="intro">
            <h1 className="intro-text">
              Hello, I'm <span className="name">Ryan Wendel</span>,
            </h1>
            <h1 className="intro-text">Junior Software Developer.</h1>
          </div>
          <div className="mission">
            <p className="mission-text">
              Hardworking, motivated software developer with experience
              designing and implementing solution-focused software on a windows
              system, looking for an entry level lob to expand my technical
              skills and gain workplace experience.
            </p>
          </div>
        </div>
        <img className="headshot" src={Headshot} alt="Headshot" />
      </div>
    </section>
  );
};

export default Home;
