import React, { Component } from "react";
import "./Modal.scss";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  render() {
    return (
      <>
        <Backdrop show={this.props.show} topStyle={"0%"} leftStyle={"0%"} />
        <div
          className="Modal"
          style={{
            transform: this.props.show
              ? "translate(-50%, -50%)"
              : "translateY(-250vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {/* <p className="Modal__close">X</p> */}
          {this.props.children}
        </div>
      </>
    );
  }
}
export default Modal;
