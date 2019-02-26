import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { showAnswer: false, correctAnswer: '' };
  }
  checkAnswer = (event) => {
    if (event === this.props.frontContent.solutionPrototype) {
      console.log('correct answer!');
      this.setState({showAnswer: true});
    }
  }
  resetState = () => {
    this.setState({showAnswer: false});
  }
  render() {
    if (this.state.showAnswer === false) { this.checkAnswer(this.props.correctAnswer) }
    // this.checkAnswer(this.props.correctAnswer);
    let content = this.state.showAnswer ? this.props.backContent : this.props.frontContent;
    let cardClass = this.state.showAnswer ? 'back' : '';
    let cardElements = this.state.showAnswer 
      ? <div className="card-back"><h3>The Correct Solution is:</h3> <h4>{content}</h4></div>
      : <div className="card-front"><h3>What prototype would you use to..</h3><h3>{content.problem}</h3> <h4 className="snippet">{content.snippet}</h4></div>;
    return (
      <div className={`card ${cardClass}`}>
        <button onClick={() => {
              this.setState({showAnswer: false});
              this.props.prevCard();
            }} className="left">PREVIOUS
          <span></span>
        </button>
        <button onClick={() => {
              this.setState({showAnswer: false});
              this.props.nextCard();
            }} className="right">SKIP
          <span></span>
        </button>
        <span onClick={() => this.setState({showAnswer: !this.state.showAnswer})} className='card-counter'>{this.props.cardNumber + 1}</span>
        {cardElements}
      </div>
    )
  }
}