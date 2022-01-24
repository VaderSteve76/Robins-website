import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import FAQ from './Components/FAQ/Faq';
import Gallery from './Components/Gallery/Gallery';
import Visit from './Components/Visit/Visit';
import EarlyStim from './Components/EarlyStim/EarlyStim';
import Product from './Components/Products/Product';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav">
          <nav>
            <Link className="link" to="/">Home</Link> 
            <Link className="link" to="/FAQ">FAQ</Link>
            <Link className="link" to="/EarlyStim">Early Stimulation</Link>
            <Link className="link" to="/Visit">Before You Visit</Link>
            <Link className="link" to="/Product">Products</Link>
            <Link className="link" to="/Gallery">Gallery</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/EarlyStim" element={<EarlyStim />} />
          <Route path="/Visit" element={<Visit />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
