import './App.css';
import Navbar from "./components/NavBar"; 
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // ✅ Updated here

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes> {/* ✅ Use Routes instead of Switch */}
          <Route path="/" element={<Home />} /> {/* ✅ Use element= instead of component= */}
        </Routes> 
        <Footer />
      </Router>
    </div>
  );
}

export default App;

