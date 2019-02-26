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
    this.props.resetState({userName: this.state.userName.length ? this.state.userName : 'User2'});
  }
  render() {
    console.log('firsttime', this.state.firstTime);
    let containerClass = this.state.firstTime ? "screen" : "hide";
    return (
      <div className={containerClass}>
        <div className="welcome">
          <div className="title">
            <h1>Welcome to <span>ProtoSnack!</span></h1>
            <h3>We see that this is your first time here!</h3>
          </div>
          <p>ProtoSnack is an app for practicing your basic JavaScript string and array prototypes!</p>
          <p>ProtoSnack will remember your progress for you, so feel free to relax and study!</p>
          <form className="inputContainer">
            <input onChange={this.setName} className="userSubmit" type="text" placeholder="enter name here.." ></input>
            <button onClick={this.storeName}>Submit</button>
          </form>
        </div>
      </div>
      )
  }
}