import React from 'react';

const person = (props) => {
  return (
    <div>
      <p>Hi, I'am {props.name} and i {props.age} years old.</p>
    </div>
  )
};

export default person;
