import React from "react";
import Experience from "./Experience";
import Education from "./Education";
import Hobbies from "./Hobbies";

function About() {
  return (
    <div className="About">
      <h2 className="about">About Me</h2>
      <h3>
        Welcome to my page. I am Alisha and I am a full stack engineer in the
        Boulder, CO area.
      </h3>
      <img
        className="me"
        src={require("../../../images/alisha Copy Copy Copy.jpg")}
        alt="Me"
      />
      <ul className="skills">
        <b>Skills</b>
        <li>
          Fronted: Javascript (ES5 and ES6), React, jQuery, HTML5, CSS3, Axios{" "}
        </li>
        <li>
          Backend: Node.js, Express, Python, MongoDB, PostgreSQL, RESTful API
        </li>
        <li>
          Testing/Deployment: Jest, Mocha, Chai, React Testing Library, AWS,
          Surge
        </li>
        <li>
          Dev Tools: Vim, Git, npm, Webpack, Babel, Postman, VSCode, Figma
        </li>
      </ul>
      <Experience />
      <Education />
      <Hobbies />
    </div>
  );
}

export default About;
