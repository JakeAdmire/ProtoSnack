import React, { Component } from 'react';
import Answers from './Answers.js';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { showAnswer: false, attemptCorrect: false };
  }
  showResults = (event) => {
    if (event.target.innerText === this.props.frontContent.solutionPrototype) {
      this.setState({attemptCorrect: true, showAnswer: true});
    } else { 
      this.setState({attemptCorrect: false, showAnswer: true})
    }
  }
  changeCards = (event) => {
    if (event.target.classList.value === 'left') { 
      this.props.prevCard() 
    } else { 
      this.props.nextCard() 
    }
    this.setState({showAnswer: false})
  }
  handleClick = (event) => {
    console.log(event.target.innerText);
    if (event.target.innerText == 'try again') { this.setState({showAnswer: false}); 
    } else { 
      this.props.nextCard();
      this.setState({showAnswer: false, attemptCorrect: false})
    }
  }
  generateCard() {
    let header = this.state.attemptCorrect ? 'Good Job!' : 'Incorrect!';
    let button = this.state.attemptCorrect ? 'next prototype' : 'try again';
    if (this.state.showAnswer) {
      return (
      <div className="card-back">
        <h2>{header}</h2>
        <button onClick={this.handleClick}>{button}</button> 
      </div>
      ) 
    } else {
      return (
      <div className="card-front">
        <h3>What prototype would you use to..</h3>
        <h3>{this.props.frontContent.problem}</h3> 
        <h4 className="snippet">{this.props.frontContent.snippet}</h4>
      </div>
      )
    }
  }
  render() {
    let cardClass = this.state.showAnswer ? 'back' : '';
    return (
      <div className={`card ${cardClass}`}>
        <button onClick={this.changeCards} className="left">PREVIOUS
          <span></span>
        </button>
        <button onClick={this.changeCards} className="right">SKIP
          <span></span>
        </button>
        <span onClick={() => this.setState({showAnswer: !this.state.showAnswer})} className='card-counter'>{this.props.cardNumber + 1}</span>
        {this.generateCard()}
        <Answers  answers={this.props.answers}
                  correctAnswer={this.props.correctAnswer}
                  showResults={this.showResults}/>
      </div>
    )
  }
}