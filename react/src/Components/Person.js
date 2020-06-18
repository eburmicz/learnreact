import React from 'react';

import './Person.css';

const person = (props) => {

    return <div className='Person'>
            <p onClick={props.click}>I am a Person and I am  {props.name} and I am {props.age} {Math.floor(Math.random() * 30)}  years old!</p>
            <p> {props.children} </p>
            <input type='text' onChange={props.changed} value={props.name}></input>
            </div>
};

export default person;