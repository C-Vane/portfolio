import React from "react";
import { BigStar, SmallStar, SmallBearContainer } from "./componenets";

function Navigation() {
  return (
    <SmallBearContainer>
      <SmallStar num={Math.random() * 50 + 50} />
      <div className='tail-3'></div>
      <SmallStar num={Math.random() * 45 + 50} />
      <div className='tail-2'></div>
      <BigStar num={Math.random() * 15 + 15} />
      <div className='links'>ABOUT ME</div>
      <div className='tail-1'></div>
      <SmallStar num={Math.random() * 70 + 70} />
      <div className='small-back'></div>
      <BigStar num={Math.random() * 20 + 20} />
      <div className='links'>CONTACT ME</div>
      <div className='big-back'></div>
      <BigStar num={Math.random() * 18 + 20} />
      <div className='links'>PROJECTS</div>
      <div className='lower-part'></div>
      <div className='head'></div>
      <BigStar num={Math.random() * 14 + 20} />
      <div className='links'>SKILLS</div>
    </SmallBearContainer>
  );
}

export default Navigation;
