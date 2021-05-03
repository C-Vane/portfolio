import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Backdrop from "./StyledComponents/Backdrop";
import { ProfileImage } from "./StyledComponents/componenets";
import Navigation from "./StyledComponents/Navigation";
import Welcome from "./StyledComponents/Welcome";
import { useIntersection } from "react-use";
import { gsap } from "gsap/all";

function Home() {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.87,
  });
  const fadeOut = (element) => {
    gsap.to(element, { duration: 1, opacity: 0, ease: "power4.out" });
  };
  const fadeIn = (element) => {
    gsap.to(element, { duration: 1, opacity: 1, ease: "power4.out" });
  };
  intersection && intersection.intersectionRatio < 0.87 ? fadeOut(".profile") : fadeIn(".profile");
  return (
    <>
      <Backdrop />
      <Container>
        <Row ref={sectionRef}>
          <Col>
            <Navigation />
          </Col>
          <Col>
            <Welcome />
          </Col>
          <Col>
            <ProfileImage className='profile' />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
