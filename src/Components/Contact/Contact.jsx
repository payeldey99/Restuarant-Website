import React from "react";
import "./Contact.css"; // Import the CSS file

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-content">
        <div className="contact-details">
          <h3 className="contact-subtitle">Our Location</h3>
          <p>123 Main Street</p>
          <p>City, State ZIP Code</p>
        </div>
        <div className="contact-details">
          <h3 className="contact-subtitle">Contact Information</h3>
          <p>Email: info@yourrestaurant.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="contact-form">
          <h3 className="contact-subtitle">Send Us a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" rows="4"></textarea>
            <br/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
