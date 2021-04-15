import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Backdrop from "./StyledComponents/Backdrop";
import { ProfileImage } from "./StyledComponents/componenets";
import Navigation from "./StyledComponents/Navigation";
import Welcome from "./StyledComponents/Welcome";

function Home() {
  return (
    <>
      <Backdrop />
      <Container>
        <Row>
          <Col>
            <Navigation />
          </Col>
          <Col>
            <Welcome />
          </Col>
          <Col>
            <ProfileImage></ProfileImage>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
