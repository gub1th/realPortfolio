import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
    return (
        <header className="sidebar">
        <img id="sideProfileImage" src={process.env.PUBLIC_URL + '/images/profileImage.png'} alt="Logo" />
        <div>
          <h2 id="sideProfileName" className="poppins-medium">Daniel Gunawan</h2>
        </div>
        <div id="sideProfileHandle">
          @danielfgunawan
        </div>
        <hr/>
        <nav className="navbar">
          <ul>
            <Link to="/" className="nav-link">
              <li className="nav-item">
                  <div className="nav-icon"><FontAwesomeIcon icon={faUser} /></div>
                  <div className="link-text">Home</div>
              </li>
            </Link>
            <Link to="/about" className="nav-link">
              <li className="nav-item">
                  <div className="nav-icon"><FontAwesomeIcon icon={faUser} /></div>
                  <div className="link-text">About</div>
              </li>
            </Link>
            <Link to="/projects" className="nav-link">
              <li className="nav-item">
                  <div className="nav-icon"><FontAwesomeIcon icon={faUser} /></div>
                  <div className="link-text">Projects</div>
              </li>
            </Link>
            <Link to="/contact" className="nav-link">
              <li className="nav-item">
                  <div className="nav-icon"><FontAwesomeIcon icon={faUser} /></div>
                  <div className="link-text">Contact</div>
              </li>
            </Link>
          </ul>
        </nav>
        <hr/>
        <div id="trademark">
          © 2024 Daniel Gunawan
        </div>
      </header>  
    )
}

export default Header;