import React, { Component } from 'react';


export default class Nav extends Component {
  constructor() {
    super();
    this.state = { currentCard: 0 };
  }
  switchCards = (event) => {
    if (event.target.classList.contains("left")) {
    console.log('left'); 
  } else {
    console.log('right');
  }
    // if event className === left, setState({currentCard: currentCard-1})
    // else setState({currentCard: currentCard+1})
  }
  render() {
    return (
      <div className="nav">
        <button onClick={this.switchCards} className="left"></button>
        <button onClick={this.switchCards} className="right"></button>
      </div>
      )
  }
}