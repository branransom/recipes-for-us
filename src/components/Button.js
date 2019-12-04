import React from "react";

const Button = props => {
  console.log(props.style);
  return (
    <button
      style={props.style}
      className={
        props.type == "primary" ? "ui button primary" : "ui button secondary"
      }
      onClick={props.action}
    >
      {props.title}
    </button>
  );
};

export default Button;
