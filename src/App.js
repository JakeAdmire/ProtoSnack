import React, { Component } from 'react';
// 
import Welcome from './Welcome.js';
import Header from './Header.js';
import Main from './Main.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      cards: [],
      prototypes: [],
      cardNumber: 0
    }
  }
  componentDidMount() {
    this.setState({userName: localStorage.getItem('userName') ? localStorage.getItem('userName') : 'User'});
    fetch('http://memoize-datasets.herokuapp.com/api/v1/jaflashcards')
      .then(response => response.json())
      .then(cards => {
        this.setState({ cards: cards.JAFlashCards })
      })
      .catch(error => {
        throw new Error(error)
      })
      fetch('http://memoize-datasets.herokuapp.com/api/v1/japrototypes')
      .then(response => response.json())
      .then(prototypes => {
        this.setState({
          prototypes: prototypes.JAprototypes
        })
      })
      .catch(error => {
        throw new Error(error)
      })
  }
  resetState = (state) => {
    this.setState(state);
  }
  generatePage = () => {
    let cards = JSON.parse(localStorage.getItem('cardsArray'));

    let appendMain = ''
    
    if (cards) {
      cards.length
        ? appendMain = <Main  cards={cards}
                              answers={this.state.prototypes}
                              resetState={this.resetState}
                              correctAnswer={this.state.cards[this.state.cardNumber].solutionPrototype}
                              />
        : appendMain = <div>No more cards..</div>;  
    }

    let appendPage = 
      localStorage.getItem('cardsArray')
      ? <div className="App">
              <div className="donut">
              </div>
              <div>
                <Header userName={this.state.userName}
                        />
                { appendMain }
              </div>
            </div>
      : <Welcome  resetState={this.resetState}
                  cards={this.state.cards}
                  />;

    let loadPage = '' 
    if (this.state.cards.length > 0 && this.state.prototypes.length > 0) {
      loadPage = <div>{ appendPage }</div>
    } else loadPage = <div>loading</div>

    return loadPage;
    
  }
  render() {
    return (
      <div>
      { this.generatePage() }
      </div>
      )
    }
}