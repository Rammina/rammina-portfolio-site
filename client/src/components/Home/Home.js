import React, { useState } from "react";
import "./Home.scss";

const Home = ({}) => {
  // render
  return (
    <section id="home-section" className="flex-center">
      <div className="flex-center">
        <p className="home__text">
          Hi, I'm <span className="highlight">Carlos Miguel Pimentel</span>.
          <br />
          I'm a full-stack Web Developer.
        </p>

        <button className="home__button">
          View my work {/*add an image tag here*/}
        </button>
      </div>
    </section>
  );
};

export default Home;

/*
//NOTE: figure out how to use canvas (-Rammina)
<div id="pt" className="canvas">
  <canvas
    id="canvas"
    width="1920"
    height="936"
    style="width: 1536px; height: 749px;"
  ></canvas>
</div>
*/
