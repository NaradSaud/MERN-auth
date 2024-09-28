import React, { useState } from "react";
import { Link } from "react-router-dom"; // Using react-router-dom for navigation
import "./index.css"; // Import the external CSS
import logo from "./logo.png"; // Ensure this path is correct

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the mobile menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo" width="50" height="50" />
          <h1>
            <Link to="/">E-Medical & Home Remedy</Link>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/health-tips" onClick={closeMenu}>
                Health Tips
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={closeMenu}>
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <button
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? "✕" : "☰"}{" "}
          {/* Show cross or hamburger icon based on menu state */}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/health-tips" onClick={closeMenu}>
              Health Tips
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={closeMenu}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
