
import React from "react";

const Button = (props) => {
    return (
        <button 
            onClick={props.onClick} 
            type={props.type} 
            className={props.className}
            disabled={props.disabled}
            >{props.name}</button>
    )

};

export default Button;