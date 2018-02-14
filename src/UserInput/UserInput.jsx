import React from 'react';
import './UserInput.css'

const inlineStyle = {}

const UserInput = (props) => {
    return (
        <div className='UserInput'>
            <input type="text" onChange={props.changed} value={props.userName}></input>
        </div>
    )
};

export default UserInput;