
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/Display3.webp';
import '../styles/Home.css';
import { ReactTyped } from 'react-typed';

function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowButton(true);
    }, 3000); // Adjust this if needed to match typing duration

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>
          <ReactTyped
            className="typed-text"
            strings={["Collab Code"]}
            typeSpeed={80}
            showCursor={false}
          />
        </h1>
        <p>
          <ReactTyped
            className="typed-text"
            strings={["Collaborate and Code"]}
            typeSpeed={60}
            showCursor={false}
            startDelay={1500}
          />
        </p>

        <Link to="/signup">
          <button
            className={`fade-in-button ${showButton ? 'show' : ''}`}
          >
            Use now!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

