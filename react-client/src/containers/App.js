import React, { Component } from "react";
import "./App.scss";
import Layout from "./Layout/Layout.js";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from "reactstrap";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <h1>Your MERN Template with SaSS is working!</h1>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
