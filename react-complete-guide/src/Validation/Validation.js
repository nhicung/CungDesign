import React from 'react';

const Validation = (props) => {
    let validationInput = 'Text is long enough';

    if (props.Inputlength <= 5){
        validationInput = 'Text is too short'
    }

    return (
        <div>
            {
                validationInput
            }
        </div>
    )
};

export default Validation; 