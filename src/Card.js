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
  handleClick = (event) => {
    if (event.target.classList.value === 'left') { 
      this.props.prevCard() 
    } else { 
      this.props.nextCard() 
    }
    this.setState({showAnswer: false})
  }
  render() {
    console.log(this.state.attemptCorrect);
    let content = this.state.showAnswer ? this.props.backContent : this.props.frontContent;
    let cardClass = this.state.showAnswer ? 'back' : '';
    let cardElements = this.state.showAnswer 
      ? <div className="card-back"><h3>The Correct Solution is:</h3> <h4>{content}</h4></div>
      : <div className="card-front"><h3>What prototype would you use to..</h3><h3>{content.problem}</h3> <h4 className="snippet">{content.snippet}</h4></div>;
    return (
      <div className={`card ${cardClass}`}>
        <button onClick={this.handleClick} className="left">PREVIOUS
          <span></span>
        </button>
        <button onClick={this.handleClick} className="right">SKIP
          <span></span>
        </button>
        <span onClick={() => this.setState({showAnswer: !this.state.showAnswer})} className='card-counter'>{this.props.cardNumber + 1}</span>
        {cardElements}
        <Answers  answers={this.props.answers}
                  correctAnswer={this.props.correctAnswer}
                  showResults={this.showResults}/>
      </div>
    )
  }
}