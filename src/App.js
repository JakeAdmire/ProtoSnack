import React, { Component } from 'react';
import Welcome from './Welcome.js';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Answers from './Answers.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Welcome />
        <Header />
        <Nav />
        <Main />
        <Answers />
      </div>
    );
  }
}