import React, { useState } from "react";
import "../../Styles/Navbar.css";
import logo from "../../IMAGES/ma-LOGO.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="Logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/About">About</a>
          </li>
          <li className="nav-item">
            <a href="/Projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="/Contact">Contact</a>
          </li>
          <li className="nav-item nohover ">
            <a className="resume" href="/Resume">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
