import React, { useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./history";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// react context
import { WindowContext } from "./AppContext";
import * as constants from "./utils/constants.js";

import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import "./normalize.css";
import "./index.scss";

const App = (props) => {
  // for screen resizing and responsiveness
  const { NON_MOBILE_WIDTH, NON_MOBILE_HEIGHT } = constants;
  const [isNonMobileWidth, setIsNonMobileWidth] = useState(
    window.innerWidth >= NON_MOBILE_WIDTH
  );
  const [isNonMobileHeight, setIsNonMobileHeight] = useState(
    window.innerHeight >= NON_MOBILE_HEIGHT
  );

  const handleResize = () => {
    if (window.innerWidth >= NON_MOBILE_WIDTH) {
      setIsNonMobileWidth(true);
    } else {
      setIsNonMobileWidth(false);
    }
    if (window.innerHeight >= NON_MOBILE_HEIGHT) {
      setIsNonMobileHeight(true);
    } else {
      setIsNonMobileHeight(false);
    }
  };

  const getWindowContextValue = () => {
    return { isNonMobileWidth, isNonMobileHeight };
  };

  // render
  return (
    <div id="app-outer-container">
      <ToastContainer />
      <Router history={history}>
        <WindowContext.Provider value={getWindowContextValue()}>
          {/*<Header />*/}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route>
              <ErrorPage
                errorCode="404"
                errorHeading="Page not found."
                errorText="Sorry, we could not find the page you are looking for."
              />
            </Route>
          </Switch>
        </WindowContext.Provider>
      </Router>
    </div>
  );
};

export default App;
