import React from "react";
import { Link } from 'react-router-dom';
import "./styles.css";

function Contact() {
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

      <section className="contact-section">
        <h2 className="K2D">Contact Us</h2>
        <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" defaultValue={""} />
            <button className="btn" type="submit">Send</button>
        </form>
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6038.720779639513!2d-73.95184732415152!3d40.82004707137754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f6657fa896f5%3A0xa785a9c0ac09561a!2sThe%20City%20College%20of%20New%20York!5e0!3m2!1sen!2sus!4v1741738190853!5m2!1sen!2sus" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>

        <footer>
            <p>Follow us: <Link to="/">Facebook</Link> | <Link to="/">Instagram</Link></p>
            <p>Business Hours: Mon-Sun 7 AM - 11 PM</p>
        </footer>


    </div>
  );
}

export default Contact;