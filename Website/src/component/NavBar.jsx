import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <span className="nav-icon">🍴</span>
        <span className="nav-title">UC Restaurant</span>
      </div>
      <ul className="nav-links">
        <li className="nav-link">
          <Link to="/" className="nav-link-item ">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/about" className="nav-link-item">About</Link>
        </li>
        <li className="nav-link">
          <Link to="/menu" className="nav-link-item">Menu</Link>
        </li>
        <li className="nav-link">
          <Link to="/book" className="nav-link-item">Book</Link>
        </li>
        <li className="nav-link">
          <Link to="/contact" className="nav-link-item">Contact</Link>
        </li>
      </ul>
      <Link to="/login">
        <button className="nav-login">Login</button>
      </Link>
    </nav>
  );
};

export default Navbar;
