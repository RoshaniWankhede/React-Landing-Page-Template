import React from 'react'
import { Navigation } from './navigation';
import '../styles/home/home.css'
import { Features } from './features';
import { About } from './about';
import { Services } from './services';
import { Gallery } from './gallery';
import { Contact } from './contact';
const Home = () => {
    // const landingImage = "/assets/homepage/cvit3.webp"
  return (
    <>
      <div className="homeMainContainer">
        <Navigation />
        <div className="homeImageContainer">
          {/* <img src="/assets/homepage/cvit3.webp" alt="website-logo" /> */}
          <div className="homeDataContainer" data-aos="fade-up">
            <h2>AI BASED</h2>
            <h1 className="redText">MACHINE VISION</h1>
            <h2>SYSTEM</h2>
            <div>CVIT SOLUTIONS PVT LTD</div>
          </div>
        </div>
        <Features />
        <About />
        <Gallery />
        <div className="customerSatisfactionContainer">
          <img
            alt="customer Satisfaction"
            src="/assets/homepage/customerSatisfaction.png"
            data-aos="zoom-out-up"
          />
        </div>
        <Services />
        <Contact />
      </div>
    </>
  );
}

export default Home;