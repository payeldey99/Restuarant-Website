import React, { useState, useEffect } from "react";
import "./CustomerReview.css";

const reviews = [
  {
    text: "The food was amazing, and the service was top-notch! I'll definitely be coming back.",
    author: "John Doe",
  },
  {
    text: "The ambiance is great, and the menu has a wide variety of delicious dishes. Highly recommended!",
    author: "Jane Smith",
  },
  {
    text: "The ambiance is good, and the menu has a wide variety of delicious dishes. Highly recommended!",
    author: "Jim Smith",
  },
  // Add more reviews here
];

function CustomerReview() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="customer-review">
      <div className="container">
        <h2 className="customer-review-title">CUSTOMER REVIEWS</h2>
        <div className="customer-review-card">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`review-card ${
                index === currentReview ? "active" : ""
              }`}
            >
              <div className="review-card-content">
                <p className="review-text">{review.text}</p>
                <p className="review-author">- {review.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerReview;
