/* 
import './App.css';
import Navbar from '../src/components/NavBar.js';
import Footer from '../src/components/Footer.js'
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // ✅ Updated here
import About from "./pages/About.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes> {/* ✅ Use Routes instead of Switch }
          <Route path="/" element={<Home />} /> {/* ✅ Use element= instead of component= }
          <Route path="/about" element={<About />} /> {/* ✅ Use element= instead of component= }
        </Routes> 
        <Footer />
      </Router>
    </div>
  );
}

export default App;
*/ 

import './App.css';
import Navbar from '../src/components/NavBar.js';
import Footer from '../src/components/Footer.js';
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

