import React from "react";
import "./style.css";

function PicButton(props) {
  return (
    <div
      role="img"
      aria-label="click item"
      onClick={() => props.handleClick(props.id)}
      style={{ backgroundImage: `url("${props.image}")` }}
      className={`click-item${props.shake ? " shake" : ""}`}
    />
  );
}

export default PicButton;
