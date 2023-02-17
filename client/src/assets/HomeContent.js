import "./HomeContentStyles.css";

import React from 'react';

// import IntroImg from "../assets/Intro-bg.jpg";
// <img className="Intro-Img" src={IntroImg} alt="IntroImg" />
import ShakeHands from "../assets/ShakeHands.png";
import { Link } from "react-router-dom";

const HomeContent = () => {
    return (
        <div className="technoid">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 mask">
              </div>
              <div className="col-12 col-lg-6 content">
              <h1 id="H1_Home" >Technoid </h1>
                <p id="PtagHome">Connecting Talent</p>
                <div className="row shakehandDiv">
                  <div className="col-12 col-lg-6">
                    <img className="ShakeHands" src={ShakeHands} alt="ShakeHands" />
                  </div>
                  <div className="col-12 col-lg-6">
                    <Link to="/contact" className=" btn-light-hands"> Contact </Link>
                  </div>
                </div>
                
                <p id="Home_ptag">A Decade of Pursuing Impactful Career Goals.</p>
                <p id="Home_p2">Leverage Our Significant Growth in Technology Expertise and Decade of Experience to Drive Effective Solutions to Your Problems.</p>
                <Link to="/about">
                  <button className="btn_4">know More About us</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );};

export default HomeContent;




// <div>
//                    <Link to="/contact" className="btn2 btn-light"> Contact </Link>
//                 </div>
