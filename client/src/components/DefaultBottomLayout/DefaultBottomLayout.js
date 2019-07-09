import React, { Component } from "react";
import "./DefaultBottomLayout.scss";
import { Row, Col } from "reactstrap";

class DefaultBottomLayout extends Component {
  state = {};
  render() {
    return (
      <Row className="bottomLayout text-center">
        <Col sm="3 bottomLayout__monsterImage">Monster Image</Col>
        <Col sm="2 bottomLayout__monsterStats">Monster Stats</Col>
        <Col sm="4 bottomLayout__content">Content</Col>
        <Col sm="3 bottomLayout__charImage">Character Image</Col>
      </Row>
    );
  }
}

export default DefaultBottomLayout;
