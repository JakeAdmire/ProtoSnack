import React from 'react';

export default function Header(props) {
  return (
    <div className="header">
      <h1>ProtoCards</h1>
      <p>Welcome {props.userName}!</p>
      <p>You've completed {props.completion} out of 30 questions!</p>
    </div>
    )
}