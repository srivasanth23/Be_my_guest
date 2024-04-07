import Navbar from "../Navbar";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./index.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-image-container">
          <div className="for-gradient">
            <h1 className="home-container-heading">Be my Guest</h1>
            <p className="home-container-para">
              Indian weddings are the missing piece of your travel puzzle !
            </p>
            <p className="home-container-description">
              Be My Guest gives travelers the chance to be a guest of Indian
              cultural wedding.
            </p>
          </div>
        </div>
      </div>
      <div className="container-home">
        <h2 className="container-heading-home"> - Our Services - </h2>
        <div className="services-container">
          <div className="service-card">
            <h2 className="service-card-heading">For Guests</h2>
            <ul>
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
              Featured Wedding <MdOutlineKeyboardArrowDown size={28} />
            </button>
            <button className="service-card-button button-md-devices">
              Featured Wedding{" "}
            </button>
          </div>
          <div className="service-card">
            <h2 className="service-card-heading">For Couples</h2>
            <ul>
              <li className="service-card-para">
                Share your celebration with international Guests.
              </li>
              <li className="service-card-para">
                Plan unique wedding experince.
              </li>
              <li className="service-card-para">
                Reduce the Guest list stress.
              </li>
              <li className="service-card-para">Get financial support.</li>
              <li className="service-card-para">
                Stay connected with your loved ones.
              </li>
            </ul>
            <button className="service-card-button">Became A Host</button>
          </div>
        </div>
      </div>
      <div className="cultures-container">
        <h2 className="container-heading-home cultures">
          - Explore about Indian Wedding Cultures -
        </h2>
      </div>
    </>
  );
};

export default Home;
