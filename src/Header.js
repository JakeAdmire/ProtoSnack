import React from 'react';

export default function Header(props) {
  return (
    <div className="header">
      <h1>ProtoCards</h1>
      <p>Welcome <span>{props.userName}</span>!</p>
      <p><span>{props.completion}</span> out of <span>30</span> questions complete!</p>
    </div>
    )
}