import React, { useState } from "react";
import "../App.css";

export default function About() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset form after 2 seconds
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 2000);
  };

  return (
    <main className="about-container">
      {/* About Section */}
      <h1>About Us</h1>
      <p>
        FixMyRide is on a mission to help small garages grow digitally. 
        We connect trusted local mechanics with customers through 
        an easy-to-use online booking system.
      </p>

      {/* Contact Form Section */}
      <div className="about-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit">Submit</button>
        </form>

        {/* Success message */}
        {submitted && (
          <p className="about-success">✅ Your message has been sent!</p>
        )}
      </div>
    </main>
  );
}