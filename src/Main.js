import React, { Component } from 'react';
import Card from './Card.js';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { cardNumber: 0 };
  } 
  increaseCardNumber = () => {
    let num = this.state.cardNumber;
    this.setState( {cardNumber: num++} );
  }
  generateCards = () => {
    const cards = this.props.cards;
    const cardsList = cards.map((card) => {
      return (
        <Card 
          frontContent={card}
          backContent={card.solutionPrototype}
          cardNumber={this.state.cardNumber}
          resetState={this.props.resetState}
          answers={this.props.answers}
          correctAnswer={this.props.correctAnswer}
          increaseCardNumber={this.increaseCardNumber}
        />
      );
    })
   return(cardsList[this.state.cardNumber]); 
  }
  render() {
    return (
      <div className="main">
        {this.generateCards()}
      </div>
    )
  }
}