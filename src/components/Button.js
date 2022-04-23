import React from "react";

function Button(props) {
  return (
    <button type={props.type} name={props.name} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
