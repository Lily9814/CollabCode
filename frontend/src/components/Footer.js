import React from 'react';
import GithubIcon from'@mui/icons-material/GitHub'
import "../styles/Footer.css"; 

function Footer() {
  return (
    <div className="footer"> 
      <div className="Github"> 
        <GithubIcon />
        </div>
      <p> &copy; 2025 collabcode.com</p>
      
    </div>
  );
}

export default Footer
