import "./index.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/varients";

const Home = () => {
  return (
    <section>
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
    </section>
  );
};

export default Home;
