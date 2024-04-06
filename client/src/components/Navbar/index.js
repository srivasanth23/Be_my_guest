import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
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
      <input type="checkbox" id="sidebar-check" />
      <label htmlFor="sidebar-check" className="open-sidebar-button">
        <IoMenu size={32} />
      </label>
      <ul className="unordered-list">
        <label htmlFor="sidebar-check" className="close-sidebar-button">
          <IoClose size={32} />
        </label>
        <Link to="/featured-weddings" className="link-propety">
          <li>Featured Weddings</li>
        </Link>
        <Link to="/client-gallery" className="link-propety">
          <li>Client Gallery</li>
        </Link>
        <Link to="/contact-us" className="link-propety">
          <li>Contact Us</li>
        </Link>
        <Link to="/faq" className="link-propety-specific">
          <li>F.A.Q's</li>
        </Link>
        <Link to="/login" className="link-propety-specific">
          <li className="login-md-display">Login</li>
        </Link>
        <Link to="/register" className="link-propety-specific">
          <li className="became-a-host-button-md">Became A Host</li>
        </Link>
      </ul>
      <ul className="login-rgister-ul">
        <Link to="/login" className="link-propety-specific">
          <li className="login">Login</li>
        </Link>
        <Link to="/register" className="link-propety-specific">
          <button className="became-a-host-button">Became A Host</button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
