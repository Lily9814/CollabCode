import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from'../assets/Display.png'
import "../styles/Home.css";


function Home() {
  return (
    <div className="home">
      <div className="headerContainer" style={{ backgroundImage: `url(${BannerImage})`}}>
        <h1> Collab Code</h1>
        <p> Collaborate and Code</p>
        <Link to="/signup">
        <button> Signup now</button>
        </Link> 
      </div>
    </div>
  )
}

export default Home
