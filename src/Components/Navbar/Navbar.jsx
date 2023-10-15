import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css"; // Import the CSS file
import logo from '../../Assets/Gallery/logo3.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="home" smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="about" smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="menu" smooth={true} duration={500}>
            MENU
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="gallery" smooth={true} duration={500}>
            GALLERY
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="review" smooth={true} duration={500}>
            REVIEWS
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="contact" smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
