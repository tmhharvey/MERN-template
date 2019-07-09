import React, { Component } from "react";
import "./App.scss";
import { Row, Col } from "reactstrap";
import {
  Link,
  BrowserRouter,
  Route,
  withRouter,
  Switch
} from "react-router-dom";

import Loadable from "react-loadable";
import ProtectedRoute from "./ProtectedRoute";

import AuthContextProvider, {
  AuthAppContext
} from "./Context/auth/AuthContextProvider";
import withAuthContext from "./Context/auth/Context_HOC";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

const Login = Loadable({
  loader: () => import("./components/Login/Login"),
  loading
});

const MainDashboardPage = Loadable({
  loader: () => import("./containers/MainDashboard"),
  loading
});

const Register = Loadable({
  loader: () => import("./components/Register/Register"),
  loading
});

class App extends Component {
  render() {
    return (
      <Row>
        <Col sm="1" />
        <Col sm="10">
          <BrowserRouter>
            <AuthContextProvider>
              <Switch>
                <Route exact path="/" component={withAuthContext(Login)} />
                <ProtectedRoute
                  exact
                  path="/home"
                  component={withAuthContext(MainDashboardPage)}
                />
                <Route
                  exact
                  path="/register"
                  component={withAuthContext(Register)}
                />
              </Switch>
            </AuthContextProvider>
          </BrowserRouter>
        </Col>
        <Col sm="1" />
      </Row>
    );
  }
}

export default App;
