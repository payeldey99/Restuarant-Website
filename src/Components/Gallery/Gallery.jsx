import React, { useState, useEffect } from "react";
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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">GALLERY</h2>
      <div className="gallery-slideshow">
        <img
          src={require(`../../Assets/Gallery/${galleryImages[currentImageIndex]}`)}
          alt={`Ima ${currentImageIndex + 1}`}
          className="gallery-image"
        />
        <button className="prev-button" onClick={prevImage}>
          Prev
        </button>
        <button className="next-button" onClick={nextImage}>
          Next
        </button>
      </div>
      <div className="gallery-dots">
        {galleryImages.map((_, index) => (
        <span
      key={index}
      className={`gallery-dot ${index === currentImageIndex ? "active" : ""}`}
      onClick={() => setCurrentImageIndex(index)}
        ></span>
  ))}
    </div>
    </div>
  );
}

export default Gallery;
