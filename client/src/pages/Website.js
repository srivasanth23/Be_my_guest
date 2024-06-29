import React, { useRef } from "react";
import Home from "../components/Home";
import CarosoulEffect from "../components/Carosoul";
import Testnomials from "../components/Testnomials";
import FeaturedWedding from "../components/FeaturedWedding";
import OurServices from "../components/OurServices";
// import { motion, useScroll } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { AnimatePresence } from "framer-motion";
import 'locomotive-scroll/dist/locomotive-scroll.css';


const Website = () => {
  const containerRef = useRef(null);
  // const { scrollYProgress } = useScroll();

  return (
    <>
      {/* <motion.div
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
      ></motion.div> UpperNavabar scroller*/}
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <AnimatePresence>
          <main data-scroll-container ref={containerRef}>
            <div className="App innerWidth">
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
          </main>
        </AnimatePresence>
      </LocomotiveScrollProvider>
    </>
  );
};

export default Website;
