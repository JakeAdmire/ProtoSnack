import React, { Component } from 'react';
import { prototypes, flashCards } from './data.js';
// 
import Welcome from './Welcome.js';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Answers from './Answers.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = { 
      userName: 'User',
      completion: 0,
      cardNumber: 0
      };
  }
  resetState = (state) => {
    this.setState(state);
  }
  render() {
    return (
      <div className="App">
        <Welcome />
        <Header  userName={this.state.userName}
                  completion={this.state.completion}
                  />
        <Main cards={flashCards}
              resetState={this.resetState}/>
        <Answers  answers={prototypes}
                  correctAnswer={flashCards[this.state.cardNumber].solutionPrototype}/>
      </div>
    );
  }
}