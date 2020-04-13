import React from 'react';

const UserInput = (props) => {
    return (
        <div className="Input">
            <input type="text" onChange={props.changed} value = {props.name}/>
        </div>
    )
};

export default UserInput;