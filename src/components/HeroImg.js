import "./HeroImgStyle.css";

import React from "react";

import IntroImg from "../assests/intro-bg2.jpg";

import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'AM HANAN ANDRIANSYAH</p>
        <h1> I'am a  Web Developer </h1>
        <div>
          <Link to="/project" className="btn">
            Project
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
