import React, { Component } from 'react';


export default class Solution extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  passAnswer = (event) => {
    this.props.resetState({correctAnswer: event.target.innerText});
  }
  render() {
    // console.log('Solution props:', this.props);
    return (
      <div className="solution">
        <button onClick={this.passAnswer}>{this.props.answer}</button>
      </div>
      )
  }
}