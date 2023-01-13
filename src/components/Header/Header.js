import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Header.css';
import { SiCoffeescript } from 'react-icons/si';

const Top = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['FRONTEND WEB DEVELOPER'],
      startDelay: 500,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 5000,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="header">
      <div className="container">
        <div className="img-container">
          <SiCoffeescript size={170} />
        </div>
        <div className="name-container">
          <h1>Edward Kim</h1>
        </div>
        <div className="contact-button">
          <a href="mailto:edk1231@gmail.com" target="_blank" rel="noopener noreferrer">
            <button>Let's Connect!</button>
          </a>
        </div>
      </div>
      <div className="script-container">
        <div className="title-container">
          <h2 ref={el}></h2>
        </div>
      </div>
    </div>
  );
};

export default Top;
