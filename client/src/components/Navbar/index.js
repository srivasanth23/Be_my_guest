import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img
          alt="logo"
          src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1712383406/Red_Typography_Initial_B_Logo_12_m4ipik.png"
          className="navbar-home-logo"
        />
      </Link>
      <div className="inner-navbar-container">
        <ul className="unordered-list">
          <Link to="/featured-weddings" className="link-propety">
            <li>Featured Weddings</li>
          </Link>
          <Link to="/client-gallery" className="link-propety">
            <li>Client Gallery</li>
          </Link>
          <Link to="/contact-us" className="link-propety">
            <li>Contact Us</li>
          </Link>
          <Link to="/faq" className="link-propety">
            <li>F.A.Q's</li>
          </Link>
        </ul>
        <ul className="login-rgister-ul">
          <Link to="/login" className="link-propety">
            <li className="login">Login</li>
          </Link>
          <Link to="/register" className="link-propety">
            <button className="became-a-host-button">Became A Host</button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
