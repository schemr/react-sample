import React from 'react';
import Person from './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p>{props.name}</p>
            <p>{props.age}</p>
        </div>
    )
}

export default person