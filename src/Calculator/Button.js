import React from "react";

function Button(props){
    return(
        <button onClick={() => props.onButtonClick(props.label)}>
            {props.label}
        </button>
    );
}

export default Button;