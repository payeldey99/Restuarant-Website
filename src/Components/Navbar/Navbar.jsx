import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css"; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Food Center</div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="menu" smooth={true} duration={500}>
            Menu
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="gallery" smooth={true} duration={500}>
            Gallery
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;