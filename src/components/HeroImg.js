import "./HeroImgStyles.css";

import React from 'react'

import IntroImg from "../assets/intro-bg.png";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return  <div className="Hero">
    <div className="mask">
      <img className="into-img" src={IntroImg} alt="introImg"/>
    </div>
    <div className="content">
      <p>HI, AM A WEB DEVELOPER.</p>
      <h1>React Developer.</h1>
      <div>
        <Link to="/project" className="btn">projects</Link>
        <Link to="/contact" className="btn btn-light">contact</Link>
      </div>
    </div>
  </div>;
  
};

export default HeroImg;