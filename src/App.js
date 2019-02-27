import React, { Component } from 'react';
// 
import Welcome from './Welcome.js';
import Header from './Header.js';
import Main from './Main.js';

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = { 
//       userName: 'User',
//       completion: 0,
//       cardNumber: 0,
//       cards: [],
//       prototypes: [],
//       correctAnswer: ''
//       }
//   }
//   componentDidMount() {
//     this.setState({userName: localStorage.getItem('userName') ? localStorage.getItem('userName') : 'User'});
//     fetch('http://memoize-datasets.herokuapp.com/api/v1/jaflashcards')
//       .then(response => response.json())
//       .then(cards => {
//         this.setState({
//           cards: cards.JAFlashCards
//         })
//       })
//       .catch(error => {
//         throw new Error(error)
//       })
//       fetch('http://memoize-datasets.herokuapp.com/api/v1/japrototypes')
//       .then(response => response.json())
//       .then(prototypes => {
//         this.setState({
//           prototypes: prototypes.JAprototypes
//         })
//       })
//       .catch(error => {
//         throw new Error(error)
//       })
//   }
//   resetState = (state) => {
//     this.setState(state);
//   }
//   render() {
//     if (this.state.cards.length > 0 && this.state.prototypes.length > 0) {
//       return (
//         <div className="App">
//           <div className="donut">
//           </div>
//           <div>
//             <Welcome resetState={this.resetState}/>
//             <Header userName={this.state.userName}
//                     completion={this.state.completion}
//                     />
//             <Main cards={this.state.cards}
//                   answers={this.state.prototypes}
//                   resetState={this.resetState}
//                   correctAnswer={this.state.cards[this.state.cardNumber].solutionPrototype}
//                   />
 
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div>loading</div>
//         )
//     } 
//   }
// }


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
        // cards.JAFlashCards.forEach((card, i) => { localStorage.setItem(i, JSON.stringify(card)); })
        localStorage.setItem('cardsArray', JSON.stringify(cards.JAFlashCards));
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
  render() {
    let cards = JSON.parse(localStorage.getItem('cardsArray'));
    if (this.state.cards.length > 0 && this.state.prototypes.length > 0) {
      return (
        <div className="App">
          <div className="donut">
          </div>
          <div>
            <Welcome resetState={this.resetState}/>
            <Header userName={this.state.userName}
                    />
            <Main cards={cards}
                  answers={this.state.prototypes}
                  resetState={this.resetState}
                  correctAnswer={this.state.cards[this.state.cardNumber].solutionPrototype}
                  />
 
          </div>
        </div>
      );
    } else {
      return (
        <div>loading</div>
        )
    }
  }
}