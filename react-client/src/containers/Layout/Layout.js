import React, { Component } from "react";
import "./Layout.scss";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  render() {
    return (
      <>
        <main className="container-fluid Content">{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
