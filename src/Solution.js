import React from 'react';

export default function Solution(props) {
  return (
      <div className="solution">
        <button onClick={props.showResults}>{props.answer}</button>
      </div>
      )
}