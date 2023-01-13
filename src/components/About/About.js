import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id="about">
      <div className="main-container">
        <div className="header">
          <h1>ABOUT ME</h1>
        </div>
        <div className="content-container">
          <div className="image-container">
            <img
              src="https://pbs.twimg.com/media/FEaFK4OWUAAlgiV?format=jpg&name=900x900"
              alt="portfolio-image"
            />
          </div>
          <div className="card-container">
            <div className="card-top">
              <div className="icon-container">
                <svg height="10" width="10">
                  <circle cx="5" cy="5" r="5" fill="#ed4c5c"></circle>
                </svg>
                <svg height="10" width="10">
                  <circle cx="5" cy="5" r="5" fill="#FDCB58"></circle>
                </svg>
                <svg height="10" width="10">
                  <circle cx="5" cy="5" r="5" fill="#78B159"></circle>
                </svg>
              </div>
            </div>
            <div className="card-bottom">
              <h2>Hi there! 👋</h2>
              <p>
                I'm Edward. I'm an aspiring Front End Engineer, looking to start
                a career path in web development. My journey began a few years
                back, when I developed an interest for smart contracts, and
                needed a way of showcasing a Solidity project to the client side
                of things.
              </p>
              <p>
                Anyway, get to know me a little bit! I lift weights four
                times a week. I believe blockchain technology will change the
                future. I play the piano, the clarinet, and the drums. I can
                sing as well, only you'll want to cover your ears. 😃 My dream is
                to be a father one day.
              </p>
              <p>Cheers!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
