import React from 'react';

const CharComponent = (props) =>{
    const style = {
        display: 'inline-block',
        textalign: 'center',
        margin: '16px',
        border: '1px solid black',
        padding: '16px',
    };

    return (
        <div style = {style} onClick= {props.clicked}>
            {props.character}
        </div>
    )
}

export default CharComponent;