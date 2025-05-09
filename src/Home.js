import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Home() {
  return (
    <div>
      <header className="home-header">
        <div className="logo">La Bandera</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Link to="/menu" className="order-btn">
          <i className="fa-solid fa-user" />
          <i className="fas fa-shopping-cart" />Order Online
        </Link>
      </header>

      <main>
      <div className="hero-slider">
        <div className="slide">
          <img src="images/dominican_foods.webp" alt="Delicious Dominican Dishes" />
          <div className="slide-text">
            <div>
              <h1 className="K2D">Welcome to La Bandera</h1>
              <p>Authentic Dominican flavors, made with love.</p>
              <a href="/menu" className="btn">Explore Menu</a>
            </div>
          </div>
        </div>
        <div className="slide">
          <img src="images/labandera.png" alt="Delicious Dominican Dish 1" />
          <div className="slide-text">
            <h1 className="K2D">Taste the Tradition</h1>
            <p>Savor the rich flavors of the Caribbean.</p>
            <a href="/menu" className="btn">Explore Menu</a>
          </div>
        </div>
        <div className="slide">
          <img src="images/sancocho.webp" alt="Delicious Dominican Dish 2" />
          <div className="slide-text">
            <h1 className="K2D">Feel at Home</h1>
            <p>Where every meal is a celebration.</p>
            <a href="/menu" className="btn">Explore Menu</a>
          </div>
        </div>
        <div className="slide">
          <img src="images/mangu.jpg" alt="Delicious Dominican Dish 3" />
          <div className="slide-text">
            <h1 className="K2D">Los tres golpes</h1>
            <p>Mashed plantains with eggs, cheese, and salami. One of the best breakfast you will have.</p>
            <a href="/menu" className="btn">Explore Menu</a>
          </div>
        </div>
        <div className="slide">
          <img src="images/tostones.jpeg" alt="Delicious Dominican Dish 4" />
          <div className="slide-text">
            <h1 className="K2D">Tostones</h1>
            <p>Fried Plantains made with a lot of love.</p>
            <a href="/menu" className="btn">Explore Menu</a>
          </div>
        </div>
        <div className="slide">
          <img src="images/habichuelas_con_dulce.jpg" alt="Delicious Dominican Dish 5" />
          <div className="slide-text">
            <h1 className="K2D">Habichuelas con Dulce</h1>
            <p>A dessert that brings people together.</p>
            <a href="/menu" className="btn">Explore Menu</a>
          </div>
        </div>
      </div>
      </main>


      <footer>
        <p>Follow us: <Link to="/">Facebook</Link> | <Link to="/">Instagram</Link></p>
        <p>Business Hours: Mon-Sun 7 AM - 11 PM</p>
      </footer>

    </div>
  );
}

export default Home;
