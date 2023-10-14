import React from "react";
import "./Gallery.css"; // Import the CSS file

function Gallery() {
  const galleryImages = [
    "ima1.jpeg", // Replace with your image file names
    "ima2.jpeg",
    "ima3.jpeg",
    "ima4.jpeg",
    "ima5.jpeg",
    "ima6.jpeg",
    "ima1.jpeg", // Replace with your image file names
    "ima2.jpeg",
    "ima1.jpeg",
    // Add more image file names here
  ];

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-images">
        {galleryImages.map((ima, index) => (
          <img
            key={index}
            src={require(`../../Assets/Gallery/${ima}`)} // Assuming gallery images are stored in the assets/gallery folder
            alt={`Ima ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
