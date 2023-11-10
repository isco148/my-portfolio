import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text="My name is Isaac i am a beginner front-end developer. This is my first ever responsive portfolio website, in time i would be an expert and develop more and more...., i have an idea on this courses as follows(HTML,CSS,JAVASCRIPT,REACT.JS,)" />
      <Footer />
    </div>
  );
};

export default About;
