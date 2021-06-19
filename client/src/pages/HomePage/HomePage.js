import React, { useState } from "react";
import { Link } from "react-router-dom";

import Home from "../../components/Home/Home";
import history from "../../history";
import "./HomePage.scss";

const HomePage = ({}) => {
  // render
  return (
    <main className="homepage main">
      <Home />
    </main>
  );
};

export default HomePage;
