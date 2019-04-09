import React from "react";
import "./Backdrop.scss";

const backdrop = props => {
  return (
    <div
      className="Backdrop"
      style={{
        transform: props.show ? null : "translateY(-250vh)",
        opacity: props.show ? "1" : "0",
        top: props.topStyle,
        left: props.leftStyle
      }}
    >
      {props.children}
    </div>
  );
};

export default backdrop;
