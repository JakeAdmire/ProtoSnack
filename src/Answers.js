import React, { Component } from 'react';
import Solution from './Solution.js';


export default class Answers extends Component {
  constructor(props) {
    super(props);
    this.answersArray = [];
  }
  generateAnswers() {
    let wrongAnswers = [];
    this.props.answers.forEach((answer) => { 
      if (answer.name !== this.props.correctAnswer) {
        wrongAnswers.push(answer.name);
      }
    })
    let wrongChoices = [];
    for (let i = 0; i < 3; i++) {
      let randomIndex = Math.floor(Math.random() * wrongAnswers.length);
      wrongChoices.push(wrongAnswers[randomIndex]);
    }
    wrongChoices.push(this.props.correctAnswer);
    this.shuffleArray(wrongChoices);
  }
  shuffleArray(array) {
    this.answersArray = array.sort();
  }
  render() {
    this.generateAnswers();
    return (
      <div className="answers">
        {this.answersArray.map((answer) => {
          return <Solution  answer={answer}
                            showResults={this.props.showResults} />
          })
        }
      </div>
      )
  }
}