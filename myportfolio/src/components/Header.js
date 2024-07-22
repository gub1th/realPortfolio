import React from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faFolderOpen, faStreetView } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
    return (
        <header className="sidebar">
          <a href="/">
            <img id="sideProfileImage" src={process.env.PUBLIC_URL + '/images/profileImage.png'} alt="Logo" />
          </a>
        <div>
          <h2 id="sideProfileName" className="poppins-medium">Daniel Gunawan</h2>
        </div>
        <div id="sideProfileHandle">
          @danielfgunawan
        </div>
        <hr/>
        <nav className="navbar">
          <ul>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                <div className="nav-icon"><FontAwesomeIcon icon={faHome} /></div>
                <div className="link-text">Home</div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                <div className="nav-icon"><FontAwesomeIcon icon={faUser} /></div>
                <div className="link-text">About</div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link">
                <div className="nav-icon"><FontAwesomeIcon icon={faFolderOpen} /></div>
                <div className="link-text">Projects</div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/experiences" className="nav-link">
                <div className="nav-icon"><FontAwesomeIcon icon={faStreetView} /></div>
                <div className="link-text">Experiences</div>
              </NavLink>
            </li>
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