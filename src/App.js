import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import Cart from './Cart';
import "./styles.css";
import { CartProvider } from './CartContext'; 

function App() {
  return (
    <div className="App">
      <CartProvider> {}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
