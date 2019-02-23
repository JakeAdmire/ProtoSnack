import React, { Component } from 'react';


export default class Nav extends Component {
  constructor() {
    super();
    this.state = { currentCard: 0 };
  }
  switchCards = (event) => {
    // if event className === left, setState({currentCard: currentCard-1})
    // else setState({currentCard: currentCard+1})
  }
  render() {
    return (
      <div>
        <div onClick={this.switchCards} className="left"></div>
        <div onClick={this.switchCards} className="right"></div>
      </div>
      )
  }
}