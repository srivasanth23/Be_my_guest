import CarosoulEffect from "../Carosoul";
import Testnomials from "../Testnomials";
import FeaturedWedding from "../FeaturedWedding";
import Navbar from "../Navbar";
import "./index.css";
import { motion } from "framer-motion";
import OurServices from "../OurServices";
import { fadeIn } from "../../utils/varients";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-image-container">
          <div className="for-gradient">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
              className="home-container-heading"
            >
              Be my Guest
            </motion.h1>
            <motion.p
              variants={fadeIn("left", 0.5, "spring", 50, 50)}
              className="home-container-para"
              initial="hidden"
              whileInView={"show"}
            >
              Indian weddings are the missing piece of your travel puzzle !
            </motion.p>

            <motion.p
              variants={fadeIn("right", 0.5, "spring", 50, 50)}
              className="home-container-description"
              initial="hidden"
              whileInView={"show"}
            >
              Be My Guest gives travelers the chance to be a guest of Indian
              cultural wedding.
            </motion.p>
          </div>
        </div>
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
    </>
  );
};

export default Home;
