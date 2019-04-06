import React, { Component } from "react";
import "./Loading.scss";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import Loader from "react-loader-spinner";

class Loading extends Component {
  state = {
    loading: true
  };

  render() {
    return (
      <>
        <div className="loaderSection">
          <Loader type="Oval" color={"#34b75c"} height={80} width={80} />
          <h2>Preparing awesome data for you...</h2>
        </div>
      </>
    );
  }
}

export default Loading;
