import React, { Component } from 'react';


export default class Welcome extends Component {
  constructor() {
    super();
    this.state = { firstTime: true };
  }
  render() {
    let welcomeHeader = this.state.firsTime ? "Welcome to ProtoCards!" : "Welcome back to ProtoCards!";
    let welcomeTitle = this.state.firstTime ? "We see that this is your first time here!" : "We've missed you!";
    let welcomeDescript = this.state.firstTime ? "ProtoCards is an app for practicing your basic JavaScript string and array prototypes!" : "ProtoCards remembered your progress while you were away!";
    let welcomeGoodbye = this.state.firstTime ? "ProtoCards will remember your progress for you, so feel free to relax and study!" : "Go ahead and study to your heart's content!";
    return (
      <div>
        <h1>{welcomeHeader}</h1>
        <h3>{welcomeTitle}</h3>
        <p>{welcomeDescript}</p>
        <p>{welcomeGoodbye}</p>
      </div>
      )
  }
}