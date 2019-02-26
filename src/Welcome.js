import React, { Component } from 'react';


export default class Welcome extends Component {
  constructor() {
    super();
    this.state = { firstTime: true, userName: '' };
  }
  componentDidMount = () => {
    console.log('mounteeeeng');
    this.setState({firstTime: localStorage.getItem('firstTime') ? false : true});
  }
  setName = () => {
    const value = document.querySelector('.userSubmit').value;
    this.setState({userName: value});
  }
  storeName = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', this.state.userName);
    localStorage.setItem('firstTime', this.state.userName.length ? false : true);
    this.setState({firstTime: this.state.userName.length ? false : true});
  }
  render() {
    console.log('firsttime', this.state.firstTime);
    let welcomeHeader = this.state.firstTime ? <h1>Welcome to <span>ProtoSnack!</span></h1> : '';
    let welcomeTitle = this.state.firstTime ? "We see that this is your first time here!" : '';
    let welcomeDescript = this.state.firstTime ? "ProtoSnack is an app for practicing your basic JavaScript string and array prototypes!" : '';
    let welcomeGoodbye = this.state.firstTime ? "ProtoSnack will remember your progress for you, so feel free to relax and study!" : '';
    let continueButton = this.state.firstTime ? <form className="inputContainer"><input onChange={this.setName} className="userSubmit" type="text" placeholder="enter name here.." ></input><button onClick={this.storeName}>Submit</button></form> : '';
    return (
      <div className="screen hide">
        <div className="welcome">
          <div className="title">
            {welcomeHeader}
            <h3>{welcomeTitle}</h3>
          </div>
          <p>{welcomeDescript}</p>
          <p>{welcomeGoodbye}</p>
          {continueButton}
        </div>
      </div>
      )
  }
}