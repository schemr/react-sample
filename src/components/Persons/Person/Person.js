import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>{props.name}</p>
            <p>{props.age}</p>
            <input type="text" onChange={props.edit} value={props.name} />
        </div>
    )
}

export default person