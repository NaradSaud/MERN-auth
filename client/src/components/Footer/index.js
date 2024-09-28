// Footer.js
import React from "react";
import "./index.css"; // Import external CSS

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links */}
        <div>
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/about" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="footer-link">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="footer-link">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="footer-heading">Contact Us</h3>
          <p className="footer-text">
            Email: info@emedical.com <br />
            Phone: +1 234 567 890
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="footer-heading">Follow Us</h3>
          <ul className="footer-links">
            <li>
              <a href="https://facebook.com" className="footer-link">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" className="footer-link">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="footer-link">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
          © {new Date().getFullYear()} E-Medical & Home Remedy. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
