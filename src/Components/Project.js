import React from "react";
import "./styles/Project.css";
import Blackjack from "./BlackJack";
import { FaTimes } from 'react-icons/fa'  

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.image = this.image.bind(this);
    this.display = this.display.bind(this);
    this.liveDemo = this.liveDemo.bind(this);
    this.state = {
      showProject: false,
      display: props.display,
      id: props.id,
      CurrentIMG: props.CurrentIMG,
      Images: props.Images,
      text: props.text,
      name: props.name,
    };
  }
  

  image = () => {
    if (this.state.CurrentIMG!=="none"){
      return (
        <img
          className="project-img"
          src={this.state.CurrentIMG}
          alt=''
        ></img>
      );
    } else {
      return
    }
  }

  display = () => {
    this.setState({showProject: !this.state.showProject});
  }

  liveDemo = () => {
    if(this.state.id === 'BJ') return (
      <button className="sample" onClick={this.display}>Live Demo</button>
    )
    return null;
  }

  render(){
    if (!this.state.showProject){
      return (
        <div
          id={this.state.id}
          style={{ display: this.state.display }}
          className="app column"
        >
          <div className="img-scroller">
            {this.image(this.state)}
          </div>
          <div className="project-text">
            {this.liveDemo()}
            <h2 className="project-h2">{this.state.name}</h2>
            <p className="project-p">{this.state.text}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div id="BJ" className="app column">
          <div className="closeOut">
            <FaTimes className="close" onClick={this.display}/>
          </div>
          <Blackjack />
        </div>
      );
    }
  }
};
