import React, { useState } from 'react';
import { Link as LinkTo } from 'react-router-dom';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <LinkTo
                exact="true"
                to="/"
                // activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </LinkTo>
            </li>
            <li className="nav-item">
              <LinkTo
                exact="true"
                to="/blog"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </LinkTo>
            </li>
            <li className="nav-item">
              <LinkTo
                exact="true"
                to="/resume"
                className="nav-links"
                onClick={handleClick}
              >
                Resume
              </LinkTo>
            </li>
            <li className="nav-item">
              <a
                className="nav-links"
                onClick={() => (window.location = 'mailto:edk1231@gmail.com')}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
