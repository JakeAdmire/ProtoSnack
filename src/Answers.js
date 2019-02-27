import React, { Component } from 'react';
import Solution from './Solution.js';


export default class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = { answersArray: []};
  }
  componentDidMount() {
    let wrongAnswers = [];
    for (let i = 0; i < 3; i++) {
      let randomIndex = Math.floor(Math.random() * this.props.answers.length);
      wrongAnswers.push(this.props.answers[randomIndex].name);
    }
    wrongAnswers.push(this.props.correctAnswer);
    this.shuffleArray(wrongAnswers)
  }
  shuffleArray(array) {
    this.setState({ answersArray: array.sort() })
  }
  render() {
    return (
      <div className="answers">
        {this.state.answersArray.map((answer) => {
          return <Solution  answer={answer}
                            showResults={this.props.showResults} />
          })
        }
      </div>
      )
  }
}