import React from "react";
import "./styles/Project.css";

const Project = (props) => {

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
        <h2>{props.name}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Project;
