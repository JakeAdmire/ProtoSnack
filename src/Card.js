import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { showAnswer: false }
  }
  resetState = () => {
    this.setState({showAnswer: false});
  }
  render() {
    let content = this.state.showAnswer ? this.props.backContent : this.props.frontContent;
    let cardClass = this.state.showAnswer ? 'back' : '';
    let cardElements = this.state.showAnswer 
      ? <div className="card-back"><h3>The Correct Solution is:</h3> <h4>{content}</h4></div>
      : <div className="card-front"><h3>{content.problem}</h3> <h4>{content.snippet}</h4></div>;
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