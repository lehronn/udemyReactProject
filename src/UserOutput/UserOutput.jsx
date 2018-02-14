import React from 'react';
import './UserOutput.css'

const inlineStyle = {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px'
}

const UserOutput = (props) => {
    return (
        <div className='UserOutput'>
            < p className = 'paragraph' style = {inlineStyle}>
                Hi, I am {props.userName}, consectetur adipisicing elit. Tempora suscipit quisquam, temporibus
                possimus nulla ab quaerat nostrum ullam repudiandae fugiat a, eveniet consequatur qui omnis.
            </p>
            <p className= 'paragraph'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis, exercitationem totam molestias,
                culpa labore est officia reiciendis sit itaque earum tenetur in reprehenderit velit?
            </p> 
        </div>
    )
};

export default UserOutput;