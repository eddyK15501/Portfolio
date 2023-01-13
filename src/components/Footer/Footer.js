import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id="footer">
      <div className="main-container">
        <div className="icon-container">
          <a href="https://github.com/eddyK15501/">
            <FaGithub size="24px" />
          </a>
          <a href="https://www.linkedin.com">
            <FaLinkedin size="24px" />
          </a>
          <a href="https://www.facebook.com">
            <FaFacebook size="24px" />
          </a>
          <a href="https://instagram.com">
            <FaInstagram size="24px" />
          </a>
        </div>
        <div className="copyright-container">
          <p>Copyright &copy; 2023 Edward Kim | All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
