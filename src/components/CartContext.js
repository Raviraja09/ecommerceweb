import React, { createContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  token: null,
  login: () => {},
  addToCart: () => {},
  updateUserEmailId: () => {},
  logout: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [userEmailId, setUserEmailId] = useState(localStorage.getItem('userEmailId') || '');

  const login = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };
  
  const logout = () => {
    setToken(null);
    setUserEmailId('');
    localStorage.removeItem('token');
    localStorage.removeItem('userEmailId');
    setCartItems([]);
  };

 
  const updateUserEmailId = (email) => {
    setUserEmailId(email);
    localStorage.setItem('userEmailId', email);
  }

  const addToCart = async (product) => {
    const response = await fetch(`https://console.firebase.google.com/project/ecomwebsite-43ebc/database/ecomwebsite-43ebc-default-rtdb/data/~2F/cart/${userEmailId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });

    if (response.ok) {
      const cart = await response.json();
      console.log('Product added to cart:', cart);
      fetchCartItems();
    } else {
      console.error('Failed to add product to cart');
    }
  }

  const fetchCartItems = useCallback(async () => {
    if (!userEmailId) return;
    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA85r2CpegHzksRz5PyHVZwav2epZF8c2o/${userEmailId}`);
    const data = await response.json();
    setCartItems([...data]);
  }, [userEmailId]);

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  const value = {
    cartItems,
    setCartItems,
    token,
    login,
    logout,
    addToCart,
    updateUserEmailId, 
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;







