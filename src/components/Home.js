import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import CartPage from "./CartPage";

export const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 2,
    name: "Product 2",
    price: 50,
    image: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 3,
    name: "Product 3",
    price: 70,
    image: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 4,
    name: "Product 4",
    price: 100,
    image: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleCartButtonClick = () => {
    setShowCart(!showCart);
  };

  const handleLoginButtonClick = () => {
    setShowLogin(!showLogin);
  };

  const handleSignUpButtonClick = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <Container>
      <NavBar
        cartItems={cartItems}
        handleCartButtonClick={handleCartButtonClick}
        handleLoginButtonClick={handleLoginButtonClick}
        handleSignUpButtonClick={handleSignUpButtonClick}
        showCart={showCart}
      />
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id}>
            <NavLink to={`/productDetail/${product.id}`}>
              <img src={product.image} alt={product.name} />
            </NavLink>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;







