import React from "react";
import '../styles/home/features.css'

export const Features = () => {
  return (
    <div id="features" className="featuresMainContainer">
      <div className="featuresInnerContainer">
        <h4 className="featuresHeading" data-aos="fade-up">
          FEATURES
        </h4>
        <div className="redBorderComponent">
          <p></p>
        </div>
        <h4 className="featuresSubText" data-aos="fade-up">
          We are a customize solution provider where we take responsibility of..
        </h4>
        <div className="featuresGrid" data-aos="fade-up">
          <div className="featuresGridItem" data-aos="flip-left">
            <h5>Complete Design, Supply and installation of hardware</h5>
            <img src="/assets/homepage/features1.png" alt="image" />
            <p>
              From ideation to installation, we orchestrate the complete journey
              of hardware provision. Our team ensures a seamless process from
              the conceptual design to the final installation, guaranteeing
              functionality and quality.
            </p>
          </div>
          <div className="featuresGridItem" data-aos="flip-left">
            <h5>Development of customise AI algorithm</h5>
            <img src="/assets/homepage/features2.png" alt="" />
            <p>
              Innovation is in our DNA. We craft AI algorithms tailored to your
              unique needs. This personalization ensures that the solutions we
              provide are precise, efficient, and aligned with your industry
              requirements.
            </p>
          </div>
          <div className="featuresGridItem" data-aos="flip-left">
            <h5>Integration with plant machinery and servers</h5>
            <img src="/assets/homepage/features3.png" alt="" />
            <p>
              We bridge the gap between cutting-edge technology and existing
              systems. Our proficiency in integrating our AI solutions with
              plant machinery and servers ensures harmonious operations without
              disruption.
            </p>
          </div>
          <div className="featuresGridItem" data-aos="flip-left">
            <h5>AMC</h5>
            <img src="/assets/homepage/features4.png" alt="" />
            <p>
              Our commitment to excellence goes beyond installation. Through our
              Annual Maintenance Contracts (AMC), we offer comprehensive
              support, guaranteeing that our solutions maintain peak performance
              throughout their lifecycle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
