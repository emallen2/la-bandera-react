import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false); 

  const addToCart = (name, price, image) => { 
    setCart(prevCart => {
      const existing = prevCart.find(item => item.name === name);
      if (existing) {
        return prevCart.map(item =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { name, price, quantity: 1, image }]; // Store the image URL
    });
  };

  const increaseQuantity = name => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = name => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = name => {
    setCart(prevCart => prevCart.filter(item => item.name !== name));
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart, total, isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);