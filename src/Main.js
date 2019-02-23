import React from 'react';
import Card from './Card.js';


export default function Main(props) {
  return (
    <div className="main">
      {
        props.cards.map((card) => {
          return <Card flashcard={card}/>
        })
      }
    </div>
    )
}