import React from 'react';

export default function Header(props) {
  return (
    <div className="header">
      <h1>ProtoSnack!</h1>
      <p>Welcome <span>{props.userName}</span>!</p>
      <p><span>{localStorage.getItem('currNum')}</span> out of <span>30</span> questions complete!</p>
    </div>
    )
}