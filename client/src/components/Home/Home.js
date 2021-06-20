import React, { useState } from "react";
import "./Home.scss";

const Home = ({}) => {
  // render
  return (
    <section id="home-section" className="flex-center">
      <div className="flex-center">
        <h1 className="home__text">
          Hi, I'm <span className="highlight">Carlos Miguel Pimentel</span>.
        </h1>
        <p className="home__p">
          An avid builder of practical, user-friendly full-stack applications.
        </p>
        {/*consider turning this into a contact call to action*/}
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
