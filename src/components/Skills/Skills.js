import React from 'react'
import "./Skills.css"
import { logos } from './logos';

const Skills = () => {

  return (
    <div id="skills">
        <div className="main-container">
            <div className="header-container">
                <h1>SKILLS</h1>
            </div>
            <div className="skills-main-container">

                {logos.map((logo, index) => (
                    <div className="skill-container" key={index}>
                        <div className="logo-container">
                            <logo.logo size={40} />
                        </div>
                        <div className="logo-header">
                            <p>{logo.name}</p>
                        </div>
                    </div>   
                ))}
                 
            </div>
        </div>
    </div>
  )
}

export default Skills