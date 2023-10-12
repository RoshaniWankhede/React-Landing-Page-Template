import React from "react";
import '../styles/home/services.css'

export const Services = (props) => {
  return (
    <div className="servicesMainContainer">
      <div id="services" className="text-center">
        <div className="container">
          <h4 className="featuresHeading" data-aos="fade-up">
            OUR SERVICES
          </h4>
          <div className="redBorderComponent" data-aos="fade-up">
            <p></p>
          </div>

          <div className="servicesGridContainer">
            <div
              className="servicesGridItem"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
            >
              {" "}
              {/* <icon className="servicesIcon">Icon</icon> */}
              <div className="service-desc">
                <h5 className="serviceSubHeading">Aerospace</h5>
                <p className="servicePara">
                  A&D businesses are already witness to how these technologies
                  have had a tran .. Read more at:
                  https://cio.economictimes..
                </p>
              </div>
            </div>
            <div
              className="servicesGridItem"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
            >
              {" "}
              {/* <icon className="servicesIcon">Icon</icon> */}
              <div className="service-desc">
                <h5 className="serviceSubHeading">Automobile</h5>
                <p className="servicePara">
                  How can we accelerate innovation in a sport at the forefront
                  of technology? Discover How. See how we're propelling
                  motorsports forwards with the Aston Martin Formula One Team
                </p>
              </div>
            </div>
            <div
              className="servicesGridItem"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
            >
              {" "}
              {/* <icon className="servicesIcon">Icon</icon> */}
              <div className="service-desc">
                <h5 className="serviceSubHeading">Drones</h5>
                <p className="servicePara">
                  An unmanned aerial vehicle (UAV) is defined as a "powered,
                  aerial vehicle that does not carry a human operator, uses
                  aerodynamic forces to provide vehicle lift, can fly
                  autonomously or be piloted remotely,
                </p>
              </div>
            </div>
            <div
              className="servicesGridItem"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
            >
              {" "}
              {/* <icon className="servicesIcon">Icon</icon> */}
              <div className="service-desc">
                <h5 className="serviceSubHeading">FMCG</h5>
                <p className="servicePara">
                  These goods are purchased frequently, consumed rapidly, priced
                  low, and sold in large quantities. They also have a high
                  turnover when they're on...
                </p>
              </div>
            </div>
            <div
              className="servicesGridItem"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
            >
              {" "}
              {/* <icon className="servicesIcon">Icon</icon> */}
              <div className="service-desc">
                <h5 className="serviceSubHeading">Wire Industry</h5>
                <p className="servicePara">
                  The Indian wire and cable market is growing at an even faster
                  pace. With a whopping CAGR 15% growth rate, the rising Indian
                  market reflects the..
                </p>
              </div>
            </div>
            <div
              className="servicesGridItem"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
            >
              {" "}
              {/* <icon className="servicesIcon">Icon</icon> */}
              <div className="service-desc">
                <h5 className="serviceSubHeading">Metal and Mining</h5>
                <p className="servicePara">
                  Rise in infrastructure development and automotive production
                  are driving growth. Power and cement industries are also...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
