import React, { useEffect } from "react";
import { BigStar, SmallStar, SmallBearContainer } from "./componenets";
import gsap from "gsap/gsap-core";
import { Power1 } from "gsap/gsap-core";
import ScrollToPlugin from "gsap/ScrollToPlugin";

function Navigation() {
  const smoothScroll = (e, id) => {
    let left = e.clientX;
    let top = e.clientY;
    scrollIntoView(id);
    const star = document.getElementsByClassName("mainStar")[0];
    star.style.top = top + 20 + "px";
    star.style.left = left + 20 + "px";
  };

  const scrollIntoView = (id) => {
    gsap.registerPlugin(ScrollToPlugin);
    const element = document.querySelector(id);
    const rect = element.getBoundingClientRect();
    gsap.to(window, { duration: Math.max(rect.top / 900), scrollTo: id, ease: Power1.easeIn });
  };

  return (
    <SmallBearContainer>
      <SmallStar num={Math.random() * 50 + 50} />
      <div className='tail-3'></div>
      <SmallStar num={Math.random() * 45 + 50} />
      <div className='tail-2'></div>
      <BigStar num={Math.random() * 15 + 15} onClick={(e) => smoothScroll(e, "#about")} />
      <div className='links' onClick={(e) => smoothScroll(e, "#about")}>
        ABOUT ME
      </div>
      <div className='tail-1'></div>
      <SmallStar num={Math.random() * 70 + 70} />
      <div className='small-back'></div>
      <BigStar num={Math.random() * 20 + 20} onClick={(e) => smoothScroll(e, "#contact")} />
      <div className='links' onClick={(e) => smoothScroll(e, "#contact")}>
        CONTACT ME
      </div>
      <div className='big-back'></div>
      <BigStar num={Math.random() * 18 + 20} onClick={(e) => smoothScroll(e, "#projects")} />
      <div className='links' onClick={(e) => smoothScroll(e, "#projects")}>
        PROJECTS
      </div>
      <div className='lower-part'></div>
      <div className='head'></div>
      <BigStar num={Math.random() * 14 + 20} onClick={(e) => smoothScroll(e, "#skills")} />
      <div className='links' onClick={(e) => smoothScroll(e, "#skills")}>
        SKILLS
      </div>
    </SmallBearContainer>
  );
}

export default Navigation;
