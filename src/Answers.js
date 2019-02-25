import React from 'react';
import Solution from './Solution.js'


export default function Answers(props) {
  let answersArray = [];
  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * props.answers.length);
    answersArray.push(props.answers[randomIndex]);
  };
  console.log('answer', props.correctAnswer);
  return (
    <div className="answers">
      {answersArray.map((answer) => {
        return <Solution  answer={answer.name} />
        })
      }
      <Solution answer={props.correctAnswer} />
    </div>
  )
}