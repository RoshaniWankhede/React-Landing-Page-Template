import React, { useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Home from "./components/home";
import AOS from "aos";
import "aos/dist/aos.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
   useEffect(() => {
     AOS.init({
       duration: 1500,
       once: false,
     });
   }, []);

  return (
    <>
      <Home />
    </>
  );
};

export default App;
