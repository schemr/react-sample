import React from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>{props.name}</p>
            <p>{props.age}</p>
            <input type="text" onChange={props.edit} value={props.name} />
        </div>
    )
}

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    edit: PropTypes.func
};

export default person