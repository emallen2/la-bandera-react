import React from "react";
import { Link } from 'react-router-dom';
import "./styles.css";

function About() {
  return (
    <div className="container">
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

        <section className="about-section">
            <h2 className="K2D">About Us</h2>
            <p>Welcome to La Bandera, where we bring the heart of the Dominican Republic to your plate. 
            </p>
            <p>La Bandera was founded in 2016 after migrating from the Dominican Republic with a simple 
                but heartfelt mission — to share the rich flavors and traditions of Dominican cuisine with the world. 
                Inspired by family recipes passed down through generations, we aim to recreate the warmth and comfort of a home-cooked meal.
            </p>
            <p>Our name, La Bandera (which means "The Flag"), reflects the national pride and culinary tradition behind one of the Dominican Republic’s most 
                beloved dishes — a vibrant plate of rice, beans, and chicken that represents the colors of the Dominican flag. </p>
        </section>


        <footer>
            <p>Follow us: <Link to="/">Facebook</Link> | <Link to="/">Instagram</Link></p>
            <p>Business Hours: Mon-Sun 7 AM - 11 PM</p>
        </footer>
    </div>
  );
}

export default About;
