import { Button } from "@material-ui/core";
import { DescriptionOutlined } from "@material-ui/icons";
import React, { useRef } from "react";
import { AboutContainer, SecondProfileImage } from "./StyledComponents/componenets";
import Resume from "../assets/Resume.pdf";
import { useIntersection } from "react-use";
import { gsap } from "gsap/all";

function About() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.setAttribute("download", "Vanessa_Cattabiani_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  });
  const fadeOut = (element) => {
    gsap.to(element, { duration: 1, opacity: 0, ease: "power4.out" });
  };
  const fadeIn = (element) => {
    gsap.to(element, { duration: 1, opacity: 1, ease: "power4.out" });
  };
  intersection && intersection.intersectionRatio < 0.9 ? fadeOut(".profile2") : fadeIn(".profile2");
  return (
    <AboutContainer id='about' ref={sectionRef}>
      <SecondProfileImage className='profile2' />
      <div>
        <h2> About Me</h2>
        <div>
          <div className='badges'>
            <div>Open to work</div>
          </div>
          <h3>Hello I'm Vanessa,</h3>
          <div>
            <div>
              <h5>A full-stack developer based in Germany, dedicated to solving problems.</h5>
              <p>
                It all started in Ethiopia, where I grew up. I was always the girl that got her hands dirty trying to fix things. <br />I can't rest if I know there is a problem I can solve.
              </p>
              <p>
                I moved to Italy after graduating from high school to pursue my B.S. in Mechanical Engineering. I had an epiphany during the covid-19 pandemic and realized that mechanical engineering
                was not for me, so I enrolled in Strive School. I quickly discovered that programming was my true calling, now I have the tools, mindset, and knowledge to provide innovative and
                creative web solutions. I enjoy the entire process of app development, from coming up with a unique solution to delivering a finished product.
              </p>
              <Button variant='outlined' onClick={downloadResume}>
                <DescriptionOutlined className='mr-2' /> Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AboutContainer>
  );
}

export default About;
