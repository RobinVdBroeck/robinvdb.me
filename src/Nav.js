import React from "react";
import { Link } from "react-static";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { classNames, toggle } from "./util.js";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <nav
        className="navbar is-transparent is-primary"
        style={{ marginBottom: 10 }}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <span className="icon">
                <FontAwesomeIcon icon={["fas", "desktop"]} />
              </span>
              RobinVdB.me
            </Link>
            <div
              className={classNames({
                "navbar-burger": true,
                "is-active": this.state.active
              })}
              onClick={this.handleBurgerClick.bind(this)}
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div
            className={classNames({
              "navbar-menu": true,
              "is-active": this.state.active
            })}
          >
            <div className="navbar-start">
              <Link className="navbar-item" to="/projects">
                Projects
              </Link>
              <Link className="navbar-item" to="/skills">
                Skills
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact me
              </Link>
            </div>
            <div className="navbar-end">
              <a
                href="https://github.com/RobinvdBroeck"
                className="navbar-item"
              >
                <span className="icon">
                  <FontAwesomeIcon fixedWidth icon={["fab", "github"]} />
                </span>
                <span>Github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/robin-van-den-broeck/"
                className="navbar-item"
              >
                <span className="icon">
                  <FontAwesomeIcon fixedWidth icon={["fab", "linkedin"]} />
                </span>
                <span>LinkedIn</span>
              </a>
              <a href="/cv-nl.pdf" className="navbar-item">
                CV
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  handleBurgerClick() {
    this.setState(prevState => ({
      active: toggle(prevState.active)
    }));
  }
}
