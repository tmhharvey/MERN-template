import React, { Component } from "react";
import "./LoggedOut.scss";
import { Row, Col } from "reactstrap";

class LoggedOut extends React.Component {
  state = {
    username: "Taylor",
    password: "clickandmortarisawesome"
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  submitHandler = async e => {
    e.preventDefault();
    const formData = { ...this.state };
    // console.log("======================FORM DATA: " + JSON.stringify(formData));

    //This is where the API request can be made
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <Row className="loggedOutContainer">
          <h1>Click And Mortar Login</h1>
          <Col sm={{ size: 8, offset: 2 }} xs={{ size: 12 }}>
            <label>
              <h2>Username</h2>
              <input
                autoFocus
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
              />
            </label>
          </Col>
          <Col sm={{ size: 8, offset: 2 }} xs={{ size: 12 }}>
            <label>
              <h2>Password</h2>
              <input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
              />
            </label>
          </Col>

          <Col xs={{ size: "5", offset: 1 }}>
            <input
              type="submit"
              value="Login"
              className="loggedOutContainer__button"
              onClick={e => {
                this.props.loginHandler(
                  e,
                  this.state.username,
                  this.state.password
                );
              }}
            />
          </Col>
          <Col xs={{ size: "2", offset: 0 }}>
            <input
              type="submit"
              value="Register"
              className="loggedOutContainer__button"
              onClick={e => {
                this.props.registerHandler(
                  e,
                  this.state.username,
                  this.state.password
                );
              }}
            />
          </Col>
        </Row>
      </form>
    );
  }
}

export default LoggedOut;
