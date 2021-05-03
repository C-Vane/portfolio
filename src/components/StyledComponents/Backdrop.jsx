import { StarBorderTwoTone } from "@material-ui/icons";
import { MotionPathPlugin, ScrollTrigger } from "gsap/all";
import gsap from "gsap/gsap-core";
import React, { useEffect } from "react";
import DrawSVGPlugin from "gsap";
import "./backdrop.scss";

function Backdrop() {
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
  gsap.set(".mainStar", { xPercent: -100, yPercent: -100 });
  let prog;

  return (
    <div id='backdrop'>
      <div id='stars'></div>
      <div id='stars1'></div>
      <div id='stars3'></div>
      <div className='mainStar'>
        <StarBorderTwoTone style={{ color: "white" }} />
      </div>
    </div>
  );
}

export default Backdrop;
