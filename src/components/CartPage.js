import React from 'react';

const CartPage = ({ items }) => {
  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            {item.name} - ${item.price}
            <button style={{ color: "red" }}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CartPage;



  