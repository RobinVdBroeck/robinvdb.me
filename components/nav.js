import React, { useState } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { classNames } from "./util.js";

export default function Nav() {
  const [active, setActive] = useState(false);

  const handleBurgerClick = () => {
    setActive(!active);
  };

  return (
    <nav
      className="navbar is-transparent is-primary"
      style={{ marginBottom: 10 }}
    >
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <div className="navbar-item">
              <span className="icon">
                <FontAwesomeIcon icon={["fas", "desktop"]} />
              </span>
              RobinVdB.me
            </div>
          </Link>
          <div
            className={classNames({
              "navbar-burger": true,
              "is-active": active,
            })}
            onClick={handleBurgerClick}
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div
          className={classNames({
            "navbar-menu": true,
            "is-active": active,
          })}
        >
          <div className="navbar-start">
            <Link href="/projects">
              <div className="navbar-item">Projects</div>
            </Link>
            <Link href="/skills">
              <div className="navbar-item">Skills</div>
            </Link>
            <Link href="/contact">
              <div className="navbar-item">Contact me</div>
            </Link>
          </div>
          <div className="navbar-end">
            <a href="https://github.com/RobinvdBroeck" className="navbar-item">
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
