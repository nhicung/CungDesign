import React from 'react';
import './Picture.css';

const Picture = (props) => {
    return (
        <div className="Picture">
            <p onClick={props.click}>This is {props.name} picture and there are {props.amt} of them </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value = {props.name}/>
        </div>
    )
};

export default Picture;