import "./AboutContentStyle.css";

import React from "react";
import { Link } from "react-router-dom";

import img1 from "../assests/react-1.jpg";
import img2 from "../assests/react-2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>
          I am a beginner web developer , i can work with a team, i create
          responsive react websites.{" "}
        </p>
        <Link to="/contact">
          <button className="btn">Contact Me</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={img2} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={img1} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
