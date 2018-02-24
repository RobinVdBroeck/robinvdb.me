import React from "react";
import { Link } from "react-static";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

export default class extends React.Component {
  render() {
    return (
      <nav className="navbar is-transparent is-primary">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <span className="icon">
                <FontAwesomeIcon icon={["fas", "desktop"]} />
              </span>
              RobinVdB.me
            </Link>
            <div className="navbar-burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="navbar-menu" id="navMenu">
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
            </div>
          </div>
        </div>
      </nav>
    );
  }

  componentDidMount() {
    const burger = document.querySelector(".navbar-burger");

    burger.addEventListener("click", () => {
      const targetId = burger.dataset.target;
      const targetElement = document.getElementById(targetId);

      burger.classList.toggle("is-active");
      targetElement.classList.toggle("is-active");
    });
  }
}
