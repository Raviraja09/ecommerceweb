import React, { createContext, useState } from 'react';

const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  token: null,
  login: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [token, setToken] = useState(null);

  const login = (token) => {
    setToken(token);
  };

  const value = {
    cartItems,
    setCartItems,
    token,
    login,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;





