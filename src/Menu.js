import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { useCart } from './CartContext'; 
import Cart from './Cart'; 

function Menu() {
  const { addToCart, isOpen, setIsOpen } = useCart();  

  const menuItems = [
    { name: 'La Bandera', price: 11.99, image: 'images/labandera.png', description: 'Rice, beans, and chicken - the Dominican classic.' },
    { name: 'Los Tres Golpes', price: 8.99, image: 'images/mangu.jpg', description: 'Mashed plantains with eggs, cheese, and salami.' },
    { name: 'Sancocho', price: 9.99, image: 'images/sancocho.webp', description: 'Dominican meat and vegetable stew.' },
    { name: 'Ensalada Verde', price: 3.99, image: 'images/ensaladaverde.png', description: 'Salad with Lettuce, Shredded cabbage, Tomato, Cucumber, Onion, etc.' },
    { name: 'Tostones', price: 3.99, image: 'images/tostones.jpeg', description: 'Fried plantains' },
    { name: 'Habichuelas con dulce', price: 4.99, image: 'images/habichuelas_con_dulce.jpg', description: 'Dominican dessert made with beans, milk, coconut milk, sweet potatoes (batata), raisins, and spices' },
  ];

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
        <button id="toggle-cart-btn" onClick={() => setIsOpen(!isOpen)} className="order-btn"> {/* Moved button here */}
          <i className="fa-solid fa-user" />
          <i className="fas fa-shopping-cart" />
          Order Online
        </button>
      </header>

      <main>
        <div className="menu-page">
          {}
          <Cart />  {}

          {}
          <section className="menu-section">
            <h2 className="K2D">Our Menu</h2>
            <div className="menu-items">
              {menuItems.map((item, index) => (
                <div className="menu-card" key={index}>
                  <h3 className="K2D">{item.name}</h3>
                  <img className="image" src={item.image} alt={item.description} />
                  <p>{item.description}</p>
                  <span>${item.price.toFixed(2)}</span>
                  <button className="btn" id="add-btn" onClick={() => addToCart(item.name, item.price, item.image)}> {/* Pass the image URL */}
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer>
        <p>Follow us: <Link to="/">Facebook</Link> | <Link to="/">Instagram</Link></p>
        <p>Business Hours: Mon-Sun 7 AM - 11 PM</p>
      </footer>
    </div>
  );
}

export default Menu;