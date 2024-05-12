import "./index.css";
import data from "../../utils/testnomials.json";
import { fadeIn } from "../../utils/varients";
import { motion } from "framer-motion";

const Testnomials = () => {
  return (
    <div className="testnomials-container">
      <h2 className=" t-head">- What our clients say -</h2>
      <div className="testnomials-cards-container">
        {data.map((item) => (
          <motion.div
            variants={fadeIn("left", 0.3, "spring", 60, 60)}
            initial="hidden"
            whileInView={"show"}
            className="testnomials-card"
            key={item.id}
          >
            <img
              src={item.image}
              alt="testnomialImage"
              className="testnomials-image"
            />
            <div className="testnomials-card-content">
              <img
                src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1714809285/Quotation-Symbol-PNG_pak2tx.png"
                alt="inverted-commas"
                className="inverted-commas"
              />
              <div className="testnomials-card-para">
                <p className="testnomials-card-para-p">{item.message}</p>
                <p className="testnomials-card-para-writter">- {item.name}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testnomials;
