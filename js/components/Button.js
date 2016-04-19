import React, { Component } from 'react';

const Button = ({count, update}) => {
  return (
    <button className="btn btn-default" onClick={update}>
      Button was clicked {count}
    </button>
  );
}


export default Button;
