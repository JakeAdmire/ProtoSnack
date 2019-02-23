import React, { Component } from 'react';


export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>{this.props.flashcard.proplem}</h1>
        <h2>{this.props.flashcard.snippet}</h2>
      </div>
      )
  }
}