import React, { Component } from 'react';


export default class Welcome extends Component {
  constructor() {
    super();
    this.state = { firstTime: true };
  }
  render() {
    console.log(this.state.firstTime);
    let welcomeHeader = this.state.firstTime ? "Welcome to ProtoSnack!" : "Welcome back to ProtoSnack!";
    let welcomeTitle = this.state.firstTime ? "We see that this is your first time here!" : "We've missed you!";
    let welcomeDescript = this.state.firstTime ? "ProtoSnack is an app for practicing your basic JavaScript string and array prototypes!" : "ProtoSnack remembered your progress while you were away!";
    let welcomeGoodbye = this.state.firstTime ? "ProtoSnack will remember your progress for you, so feel free to relax and study!" : "Go ahead and study to your heart's content!";
    let continueButton = this.state.firstTime ? <div><input type="text" placeholder="enter name here.." ></input><button>Continue</button></div> : <div><button>Thanks!</button></div>;
    return (
      <div className="screen hide">
        <div className="welcome">
          <h1>{welcomeHeader}</h1>
          <h3>{welcomeTitle}</h3>
          <p>{welcomeDescript}</p>
          <p>{welcomeGoodbye}</p>
          {continueButton}
        </div>
      </div>
      )
  }
}