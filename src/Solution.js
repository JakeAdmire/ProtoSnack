import React, { Component } from 'react';


export default class Solution extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="solution">
        <button onClick={this.props.flipCard}>{this.props.answer}</button>
      </div>
      )
  }
}