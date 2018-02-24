import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Router, Link } from "react-static";
import Routes from "react-static-routes";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import "bulma/css/bulma.css";
import "./app.css";

// Setup fontawesome
import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import solid from "@fortawesome/fontawesome-free-solid";
import regular from "@fortawesome/fontawesome-free-solid";
fontawesome.library.add(regular, brands, solid);

import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div className="container">
            <Routes />
          </div>
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
