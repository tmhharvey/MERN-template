import React, { Component } from "react";
import "./DefaultNav.scss";
import { Row, Col } from "reactstrap";

class DefaultNav extends Component {
  state = {};
  render() {
    return (
      <Row className="mainNav">
        <Col sm="2 text-center">Map</Col>
        <Col sm="8 text-center">middle nav content </Col>
        <Col sm="2 text-center">Welcome, {this.props.userName}!</Col>
      </Row>
    );
  }
}

export default DefaultNav;
