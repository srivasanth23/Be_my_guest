import React from "react";
import Home from "../components/Home";
import CarosoulEffect from "../components/Carosoul";
import Testnomials from "../components/Testnomials";
import FeaturedWedding from "../components/FeaturedWedding";
import OurServices from "../components/OurServices";
import { motion, useScroll } from "framer-motion";
// import AnimatedCursor from "react-animated-cursor";


const Website = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 7,
          transformOrigin: "0%",
          background: "#bf7659",
          zIndex: 2000,
        }}
      ></motion.div>
      <div className="App">
        {/* <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color="1, 1, 1"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            {
              target: ".custom",
              options: {
                innerSize: 12,
                outerSize: 12,
                color: "255, 255, 255",
                outerAlpha: 0.3,
                innerScale: 0.7,
                outerScale: 5,
              },
            },
          ]}
        /> */}
        <div>
          <Home />
        </div>
        <OurServices />
        <CarosoulEffect />
        <div className="compress-container">
          <div className="inner-compress-container">
            <Testnomials />
            <FeaturedWedding />
          </div>
        </div>
        <div className="tesnomials-mobile-view">
          <Testnomials />
        </div>
        <div className="featured-wedding-mobile-view">
          <FeaturedWedding />
        </div>
      </div>
    </>
  );
};

export default Website;
