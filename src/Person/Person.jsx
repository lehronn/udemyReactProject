import React from 'react';
import './Person.css';

//props.children is a content inside <Component>...</Component.

const person = (props) => {
  return (
    <div className="person">
      <p onClick={props.click}>Hi, I'am {props.name} and I' am {props.age} years old.</p>
      <p>{props.children}</p>
    </div>
  )
};

export default person;
