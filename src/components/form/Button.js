import React from "react";

const Button = props => {
  return (
    <button
      style={props.style}
      className={props.type == "primary" ? "ui button primary" : "ui button"}
      onClick={props.action}
    >
      {props.title}
    </button>
  );
};

export default Button;
