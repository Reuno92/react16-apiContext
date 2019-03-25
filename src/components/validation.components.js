import React, { useState, useEffect } from "react";

function Validation(props) {

    const [counterState, setCounterState] = useState({
        counter: props.counter,
        min: props.min,
        max: props.max,
        styling: '',
        message: ''
    });

    useEffect(() => {
        if (counterState.counter > 0 && counterState.counter < counterState.min) {
            setCounterState({
                counter: props.counter,
                min: props.min,
                max: props.max,
                styling: 'alert-danger',
                message: 'Text too short !'
            });
        }  else if (counterState.counter > counterState.max) {
            setCounterState({
                counter: props.counter,
                min: props.min,
                max: props.max,
                styling: 'alert-warning',
                message: 'Text long enough !'
            });
        } else if (counterState.counter === 0) {
            setCounterState({
                counter: props.counter,
                min: props.min,
                max: props.max,
                styling: 'alert-danger',
                message: 'It\'s empty !'
            });
        } else {
            setCounterState({
                counter: props.counter,
                min: props.min,
                max: props.max,
                styling: 'alert-success',
                message: 'Nothing to signals.'
            });
        }
    }, [props.counter]);

    function UserError() {
        return (
            <div className={`alert + ${ counterState.styling }`}>{ counterState.message }</div>
        )
    }

    return (
        <UserError />
    )
}

export default Validation;