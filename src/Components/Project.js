import React from "react";
import "./styles/Project.css";

const Project = (props) => {

  let showProject = false;

  const image = (props) => {
    if (props.CurrentIMG!=="none"){
      return (
        <img
          className="project-img"
          src={props.CurrentIMG}
          alt=''
        ></img>
      );
    } else {
      return
    }
  }

  const display = () => {
    showProject = !showProject;
  }

  const liveDemo = (id) => {
    if(id === 'BJ') return (
      <button className="sample" onClick={display()}>Live Demo</button>
    )
    return null;
  }

  if (!showProject){
    return (
      <div
        id={props.id}
        style={{ display: props.display }}
        className="app column"
      >
        <div className="img-scroller">
          {image(props)}
        </div>
        <div className="project-text">
          {liveDemo(props.id)}
          <h2>{props.name}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Project;
