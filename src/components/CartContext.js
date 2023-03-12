import React from 'react';
import { useState } from 'react';
import LoginPage from './LoginPage';

const CartContext = React.createContext();

export const CartContextProvider = () => {
  const [cartItems, setCartItems] = useState([]);
  const [token, setToken] = useState(null);

  const login = (token) => {
    setToken(token);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, token, login }}>
      <LoginPage></LoginPage>
    </CartContext.Provider>
  );
};

export default CartContext;



