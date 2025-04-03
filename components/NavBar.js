import React from 'react'
import Logo from "../assets/CollabLogo.png";
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
        <div className="leftSide"></div>
        <img src={Logo} alt="Site Logo"/>
        <div> className = "hiddenLinks"
          <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/login"> Login </Link>
        <Link to="/signup"> Signup </Link>
        </div>
        <div className="rightSide"></div>  
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/login"> Login </Link>
        <Link to="/signup"> Signup </Link>
        <button>
            <ReorderIcon /> 
        </button>
    </div>
  )
}

export default NavBar

