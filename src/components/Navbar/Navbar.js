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
              <Link
                to="main"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-55}
                duration={1000}
                className="nav-links"
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-55}
                duration={1000}
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-55}
                duration={1000}
                className="nav-links"
                onClick={handleClick}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <LinkTo
                exact="true"
                to="/blog"
                // activeclassname="active"
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
