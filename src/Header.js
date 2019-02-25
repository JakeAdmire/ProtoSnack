import React from 'react';

export default function Header(props) {
  return (
    <div className="header">
      <h1>ProtoCards</h1>
      <p>Welcome <span>{props.userName}</span>!</p>
      <p>You've completed <span>{props.completion}</span> out of 30 questions!</p>
    </div>
    )
}