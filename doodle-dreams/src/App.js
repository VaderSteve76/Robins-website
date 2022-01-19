import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import FAQ from './Components/FAQ/Faq';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav">
          <nav>
            <Link to="/">Home</Link> 
            <Link to="/FAQ">FAQ</Link>
            <Link to="/Gallery">Gallery</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
