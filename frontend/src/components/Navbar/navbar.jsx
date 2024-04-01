import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";


const Navbar = () => {
  
    return (  <header className="header">
    <div className="container">
      <h1 className="header_title">360° MarkBanch</h1>
      <nav className="header_nav">
        <ul className="header_nav-list">
          <li className="header_nav-item">
            <Link to="/" className="header_nav-link" >Home</Link>
          </li>
          <li className="header_nav-item">
            <Link to="/about" className="header_nav-link">About</Link>
          </li>
          <li className="header_nav-item">
            <Link to="/features" className="header_nav-link">Features</Link>
          </li>
          <li className="header_nav-item">
            <Link to="/solution" className="header_nav-link">Solutions</Link>
          </li>
          <li className="header_nav-item">
            <Link to="/login" className="header_nav-link">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  );
}
 
export default Navbar;
