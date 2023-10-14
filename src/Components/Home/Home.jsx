import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "./Home.css"; // Import the CSS file

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to Our Restaurant</h1>
        <p className="home-description">
          Enjoy a delightful culinary experience with our exquisite dishes.
        </p>
        <Link to="menu" smooth={true} duration={500}>
          <button className="home-button">View Menu</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
