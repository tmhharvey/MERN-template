import React, { Component } from "react";
import "./MainDashboard.scss";
import axios from "axios";
import { Row, Col, Button } from "reactstrap";
import DefaultNav from "../components/UI/Navs/DefaultNav/DefaultNav";
import DefaultBottomLayout from "../components/DefaultBottomLayout/DefaultBottomLayout";
import Modal from "../components/UI/Modal/Modal";
import Backdrop from "../components/UI/Backdrop/Backdrop";
import fireGolem from "../assets/img/fireGolem.png";

class MainDashboard extends Component {
  state = {
    firstPetNotSelected: true,
    startingPets: [
      {
        name: "Pet",
        image: { fireGolem }
      },
      {
        name: "Pet",
        image: "-"
      },
      {
        name: "Pet",
        image: "-"
      },
      {
        name: "Pet",
        image: "-"
      },
      {
        name: "Pet",
        image: "-"
      },
      {
        name: "Pet",
        image: "-"
      },
      {
        name: "Pet",
        image: "-"
      },
      {
        name: "Pet",
        image: "-"
      }
    ],
    showTutorialModal1: true
  };

  componentDidMount = async () => {
    const userInfo = await axios.get(
      process.env.REACT_APP_BACKEND + "/user/information"
    );

    console.log("username Info");
    console.log(userInfo.data);

    if (userInfo.data.user) {
      this.setState({
        userName: userInfo.data.session.userName,
        firstPetNotSelected: userInfo.data.user.firstPetNotSelected
      });
    }
  };

  tutorialModalHandler1 = () => {
    this.setState({
      showTutorialModal1: false
    });
  };
  render() {
    var renderStartingPets = this.state.startingPets.map(pet => {
      console.log(pet);
      return (
        <Col md="3 text-center">
          <div className="selectPetCard text-center">
            <h3 className="selectPetCard__title">Fire Golem</h3>
            <img src={fireGolem} />
          </div>
        </Col>
      );
    });
    console.log(this.props.context);
    return (
      <div className="mainDashboard">
        <DefaultNav userName={this.state.userName} />
        <Row className="mainContent text-center">{renderStartingPets}</Row>
        <DefaultBottomLayout />

        <Modal show={this.state.showTutorialModal1}>
          <h1
            style={{
              // color: "#fff",
              textAlign: "center"
            }}
            className="mt-3"
          >
            Welcome to MutaPets!
          </h1>
          <Row className="mt-5">
            <Col md={{ size: 6, offset: 3 }}>
              <h2 className="mt-5 mb-5">
                ...Ah, I see you received my invitation traveler
              </h2>
              <h3>
                I invited only the strongest for my competition. On this island
                you will encounter danger, excitement, but most of all...
                MUTAPETS!{" "}
              </h3>
              <h3>
                Mutapets are my own creation. As a child I played pet collecting
                games and had a dream of making them a reality.
              </h3>
              <h3>Now, it finally is!</h3>
              <h3>
                Your are about to embark on a magnificient and dangerous
                journey, should you choose to accept this path, I will allow you
                to choose oyur very own Muta pet!
              </h3>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={{ size: 6, offset: 3 }} className="text-center">
              <Button
                color="success"
                size="lg"
                onClick={this.tutorialModalHandler1}
              >
                Select Your Pet!
              </Button>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}

export default MainDashboard;
