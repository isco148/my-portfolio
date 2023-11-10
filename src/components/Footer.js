import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

import "./FooterStyles.css"

import React from 'react'


const footer = () => {
  return (
    <div className="Footer">
        <div className="Footer-container">
            <div className="left">
                <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight: "2rem" }} />
                <h4><p>8, Adenike obileye street</p></h4>
                    </div>
                    <div className="Phone">
                      <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem" }} />
                     08125127688.</h4>

                </div>
                    <div className="email">
                      <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem" }} />
                     oluwunmiisaac@gmail.com</h4>

                </div>
            </div>

            <div className="right">
              <h4>About the company.</h4>
              <p>This is me oluwunmi Isaac,i want to be a front-end developer.</p>
              <div className="social">
              <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem" }} />
              <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem" }} />
              <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem" }} />
              </div>
            </div>
        </div>
    </div>
  );
};

export default footer;


 