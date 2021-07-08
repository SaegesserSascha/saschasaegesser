import React, { ReactElement } from "react";
import "./landing.scss";
import { CgArrowLongDownR } from "react-icons/cg";

interface Props {
  offsetY: number
}

export default function Landing({offsetY}: Props): ReactElement {
  return (
    <div className="landing-wrapper" style={{transform: `translateY(${ offsetY * .5}px)`}}>
      <div className="spacer"></div>
      <div className="landing-text-wrapper">
        <div className="arrow-left">
        </div>
        <div className="landing-text">
          <h1>Sascha Sägesser</h1>
          <h2>Front-End Enthusiast</h2>
        </div>
      </div>
      <div className="scroll-hint">
        <CgArrowLongDownR size={"4em"} />
      </div>
    </div>
  );
}
