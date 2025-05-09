import React from 'react';
import './styles.css';
import { useCart } from './CartContext'; 

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart, total, isOpen, setIsOpen } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
    } else {
      alert('Proceeding to checkout...');
    }
  };

  return (
    <div>
      {}

      {isOpen && (
        <div id="cart" className="cart-sidebar">
          <div className="cart-header">
            <h2 className="K2D">Cart</h2>
            <button id="close-cart-btn" onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <ul id="cart-items">
            {cart.map(item => (
              <li key={item.name} className="cart-item">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                    style={{ width: '50px', height: '50px', marginRight: '10px', objectFit: 'cover',borderRadius: '5px', }}
                  />
                )}
                <span>{item.name}</span>
                <div className="cart-item-controls">
                  <button onClick={() => decreaseQuantity(item.name)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.name)}>+</button>
                  <button onClick={() => removeFromCart(item.name)}>🗑️</button>
                </div>
              </li>
            ))}
          </ul>
          <p>Total: $<span id="cart-total">{total.toFixed(2)}</span></p>
          <button onClick={clearCart} className="btn">Clear Cart</button>
          <button id="checkout-btn" onClick={handleCheckout} className="btn">Checkout</button>
        </div>
      )}
    </div>
  );
}