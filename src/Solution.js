import React, { Component } from 'react';


export default class Solution extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <button>{this.props.answer}</button>
      </div>
      )
  }
}