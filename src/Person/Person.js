import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person" onClick={props.click}>
            <p>{props.name}</p>
            <p>{props.age}</p>
        </div>
    )
}

export default person