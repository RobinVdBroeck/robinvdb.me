import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { classNames } from './util';

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
              RobinVdB.me
            </div>
          </Link>
          <div
            className={classNames({
              'navbar-burger': true,
              'is-active': active,
            })}
            onClick={handleBurgerClick}
            onKeyPress={handleBurgerClick}
            role="menu"
            tabIndex="0"
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div
          className={classNames({
            'navbar-menu': true,
            'is-active': active,
          })}
        >
          <div className="navbar-start">
            <Link href="/contact">
              <div className="navbar-item">Contact me</div>
            </Link>
          </div>
          <div className="navbar-end">
            <a href="https://github.com/RobinvdBroeck" className="navbar-item">
              <span className="icon">
                <FontAwesomeIcon fixedWidth icon={faGithub} />
              </span>
              <span>Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/robin-van-den-broeck/"
              className="navbar-item"
            >
              <span className="icon">
                <FontAwesomeIcon fixedWidth icon={faLinkedin} />
              </span>
              <span>LinkedIn</span>
            </a>
            <a href="/cv.pdf" className="navbar-item">
              CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
