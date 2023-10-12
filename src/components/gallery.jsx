import { Image } from "./image";
import React from "react";
import '../styles/home/gallery.css'

export const Gallery = (props) => {
  const images = [
    { src: "/assets/homepage/Automobile Inspection.jpg" },
    { src: "/assets/homepage/Aerospace.jpeg" },
    { src: "/assets/homepage/Drone.jfif" },
    { src: "/assets/homepage/FMCG.jpg" },
    { src: "/assets/homepage/Metal and MIning.jpeg" },
    { src: "/assets/homepage/Oil and Gas.jpg" },
    { src: "/assets/homepage/Vision System.jpg" },
    { src: "/assets/homepage/Wire Industry.jpg" },
  ];
  return (
    <div className="galleryMainContainer">
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h4 className="featuresHeading" data-aos="fade-up">
              MACHINE VISION APPLICATIONS
            </h4>
            <div className="redBorderComponent" data-aos="fade-up">
              <p></p>
            </div>
          </div>
          <div className="nvaSubHeading" data-aos="fade-up">
            1. Machine Vision Application for Aerospace manufacturing industry
          </div>
          <div className="mvaGridContainer">
            <div className="mvaImageContainer" data-aos="zoom-in-up">
              <img src={images[1]?.src} className="mvaImage" />
            </div>
            <div className="mvaPointsContainer" data-aos="zoom-in-up">
              <div>Surface Defect Detection</div>
              <div>Dimension accuracy inspection</div>
              <div>Manhour’s calculation</div>
              <div>Surface finishing inspection</div>
              <div>Part sequencing inspection</div>
              <div>Part orientation/pre-Fit check</div>
              <div>Human action recognition</div>
              <div>Optical character</div>
            </div>
          </div>

          <div className="nvaSubHeading" data-aos="fade-up">
            2. Machine vision application for drones
          </div>
          <div className="mvaGridContainer" data-aos="zoom-in-down">
            <div className="mvaPointsContainer">
              <div>Visual Inspection</div>
              <div>Windmill inspection</div>
              <div>Road Inspection</div>
              <div>Thermal Inspection</div>
              <div>Volumetric Inspection</div>
              <div>AI based precision landing</div>
              <div>Power line inspection</div>
              <div>Solar inspection</div>
            </div>
            <div className="mvaImageContainer" data-aos="zoom-in-down">
              <img src={images[2]?.src} className="mvaImage" />
            </div>
          </div>

          <div className="nvaSubHeading" data-aos="fade-up">
            3. Machine Vision Application for Automobile Industry
          </div>
          <div className="mvaGridContainer">
            <div className="mvaImageContainer" data-aos="zoom-in-up">
              <img src={images[0]?.src} className="mvaImage" />
            </div>
            <div className="mvaPointsContainer" data-aos="zoom-in-up">
              <div>Part Inspection presence/absence</div>
              <div>Assembly Verification</div>
              <div>Robotic Guidance</div>
              <div>Paint Quality Inspection</div>
              <div>VIN (Vehicle Identification Number) Reading</div>
              <div>Tire Inspection</div>
              <div>Welding Inspection</div>
              <div>Dimension Measurement</div>
            </div>
          </div>

          <div className="nvaSubHeading" data-aos="fade-up">
            4. Machine Vision Application for FMCG
          </div>
          <div className="mvaGridContainer">
            <div className="mvaPointsContainer" data-aos="zoom-in-down">
              <div>Packaging Inspection</div>
              <div>Label Verification</div>
              <div>Product Counting</div>
              <div>Surface Defect Detection</div>
              <div>Code Reading and Verification</div>
              <div>Fill Level Inspection</div>
              <div>Colour Inspection</div>
              <div>Shape and Size Inspection</div>
            </div>
            <div className="mvaImageContainer" data-aos="zoom-in-down">
              <img src={images[3]?.src} className="mvaImage" />
            </div>
          </div>

          <div className="nvaSubHeading" data-aos="fade-up">
            5. Machine vision application for wire industry
          </div>
          <div className="mvaGridContainer">
            <div className="mvaImageContainer" data-aos="zoom-in-up">
              <img src={images[7]?.src} className="mvaImage" />
            </div>
            <div className="mvaPointsContainer" data-aos="zoom-in-up">
              <div>Fault detection in wire drawing process</div>
              <div>Character Recognition</div>
              <div>Wire counting/sorting</div>
              <div>Dimension Inspection</div>
              <div>Wire alignment and positioning</div>
              <div>Surface defect detection</div>
              <div>Quality inspection</div>
              <div>Dimension Measurement</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
