import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = React.useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <Router basename="/react_shopping_page">
      <div className="app-container">
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
        </div>
        <Routes>
          <Route path="/" element={
            <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
              <div className="background-image"></div>
              <div className="content">
                <div className="landing_content">
                  <h1>Welcome To Paradise Nursery</h1>
                  <div className="divider"></div>
                  <p>Where Green Meets Serenity</p>
                  
                  <button className="get-started-button" onClick={handleGetStartedClick}>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
