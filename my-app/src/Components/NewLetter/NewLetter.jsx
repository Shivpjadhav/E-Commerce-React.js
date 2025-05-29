import React from "react";
import './NewLetter.css';

const NewLetter = () => {
  return (
    <div className="newsletter">
      <h1>Stay Ahead with Exclusive Offers</h1>
      <p>Join our newsletter to receive the latest deals, product updates, and more—directly to your inbox!</p>
      <div className="newsletter-input-container">
        <input type="email" placeholder="Enter your email address" />
        <button>Subscribe Now</button>
      </div>
    </div>
  );
};

export default NewLetter;
