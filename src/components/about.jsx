import React from "react";
import '../styles/home/aboutUs.css'

export const About = (props) => {
  return (
    <div id="about" className="aboutUsMainContainer">
      <div className="container">
        <h4 className="featuresHeading" data-aos="fade-up">
          ABOUT US
        </h4>
        <div className="redBorderComponent" data-aos="fade-up">
          <p></p>
        </div>
        <div className="row" style={{ marginTop: "70px" }}>
          <div className="col-xs-12 col-md-6" data-aos="fade-right">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6" data-aos="fade-left">
            <div className="about-text">
              <h3 className="aboutUsSubHeadings">About Us</h3>
              <p className="aboutUsPara">
                At CVIT Solution, we are dedicated to pushing the boundaries of
                computer vision to address critical challenges across various
                industries. We specialize in developing cutting-edge computer
                vision applications that harnessing the power of Artificial
                Intelligence, we enable businesses to automate tasks, gain
                valuable insights from visual data, and create innovative
                applications that were once considered impossible.
              </p>
              <h3 className="aboutUsSubHeadings">Our Vision</h3>
              <p className="aboutUsPara">
                Our vision is to be at the forefront of innovation, leveraging
                the potential of computer vision to solve complex problems. We
                believe that computer vision has the capacity to transform
                industries and create safer, more efficient, and intelligent
                systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
