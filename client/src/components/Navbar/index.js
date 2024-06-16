import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import "./index.css";
import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changebackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changebackground);

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <Link to="/">
        
        <img
          alt="logo"
          src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1715073413/Be-my-guest-logo-removebg-preview_m9xwwj.png"
          className="navbar-home-logo"
        />
      </Link>
      <input type="checkbox" id="sidebar-check" />
      <label htmlFor="sidebar-check" className="open-sidebar-button">
        <IoMenu size={32} color="#f6eddf" />
      </label>
      <ul className="unordered-list-navbar">
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
          <button className="became-a-host-button">Host your Wedding</button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
