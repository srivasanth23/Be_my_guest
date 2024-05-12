import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/varients";

const OurServices = () => {
  return (
    <div className="container-home">
      <h2 className="container-heading-home">- Our Services -</h2>
      <div className="services-container">
        <motion.div
          variants={fadeIn("up", 0.4, "tween", 40, 40)}
          className="service-card"
          initial="hidden"
          whileInView={"show"}
        >
          <h2 className="service-card-heading">For Guests</h2>
          <ul className="service-container-ul">
            <li className="service-card-para">
              Get engaged to with unique Indian culture.
            </li>
            <li className="service-card-para">
              Get to know about the culture of India and its rich heritage.
            </li>
            <li className="service-card-para">
              Get rid off boring office days.
            </li>
            <li className="service-card-para">Discover new destinations.</li>
            <li className="service-card-para">Travel affordably.</li>
            <li className="service-card-para">
              Stay connected with your loved ones.
            </li>
          </ul>
          <button className="service-card-button button-lg-devices">
            Featured Wedding <MdOutlineKeyboardArrowDown size={22} />
          </button>
          <button className="service-card-button button-md-devices">
            Featured Wedding{" "}
          </button>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.4, "tween", 40, 40)}
          className="service-card"
          initial="hidden"
          whileInView={"show"}
        >
          <h2 className="service-card-heading">For Couple</h2>
          <ul className="service-container-ul">
            <li className="service-card-para">
              Share your celebration with international Guests.
            </li>
            <li className="service-card-para">
              Plan unique wedding experince.
            </li>
            <li className="service-card-para">Reduce the Guest list stress.</li>
            <li className="service-card-para">Get financial support.</li>
            <li className="service-card-para">
              Stay connected with your loved ones.
            </li>
          </ul>
          <button className="service-card-button">Became A Host</button>
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;
