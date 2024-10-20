import React, { createContext, useState } from 'react';

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };
  const isInCart = (id) => {
    return cartItems.some(item => item.id === id);  
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.precio * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, isInCart, decreaseQuantity, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};
