import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import "./index.css";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changebackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  //change navbar background but it is not working because locomotive.css scroller (remove it from Website.js)

  window.addEventListener("scroll", changebackground);

  const textVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: -100,
      transition: {
        duration: 2,
        delay: 0, // 2
        ease: "anticipate",
      },
    },
  };

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="flexRowEnd">
        <Link to="/">
          <img
            alt="logo"
            src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1718513654/Red_Typography_Initial_B_Logo__3_-removebg-preview_sknxf0.png"
            className="navbar-home-logo"
          />
        </Link>
        <motion.h2
          className="logo-name logo-name-mb"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Be my Guest
        </motion.h2>
      </div>
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

export default Header;
