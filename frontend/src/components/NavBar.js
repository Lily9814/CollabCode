import React from 'react';
import Logo from "../assets/gdg_logo.png";
import { Link } from 'react-router-dom';
import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
        <div className="leftSide"></div>
        <img src={Logo} alt="Site Logo"/>
        <div className="rightSide"></div>  
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
    </div>
  )
}

export default NavBar;