import React from "react";
import './Footer.css';
import footer_logo from '../Assets/logo.webp';
import instagram_icon from '../Assets/insta.avif';
import pinterest_icon from '../Assets/facebook.png';
import whatsapp_icon from '../Assets/whatsup.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={footer_logo} alt="Shopper Logo" />
          <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Careers</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="footer-social-icon">
        <div >
          <img src={instagram_icon} alt="Instagram" className="footer-icons-container" />
        </div>
        <div >
          <img src={pinterest_icon} alt="Pinterest" className="footer-icons-container" />
        </div>
        <div >
          <img src={whatsapp_icon} alt="WhatsApp" className="footer-icons-container" />
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>&copy; 2025 SHOPPER. All Rights Reserved | Built with ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
