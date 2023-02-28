import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import CartPage from "./CartPage";
import { NavLink} from "react-router-dom";
export const products = [
  {
    id:1,
    name: "Product 1",
    price: 100,
    image: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id:2,
    name: "Product 2",
    price: 50,
    image: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id:3,
    name: "Product 3",
    price: 70,
    image: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id:4,
    name: "Product 4",
    price: 100,
    image: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false); 

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleCartButtonClick = () => {
    setShowCart(!showCart);
  };
  const handleLoginButtonClick = () => {
    setShowLogin(!showLogin);
  }

  return (
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>The Generics</Navbar.Brand>
          <Button bsStyle="primary" onClick={handleCartButtonClick}>
           Cart({cartItems.length})
           </Button>
           : (
            <Button bsStyle="primary" onClick={handleLoginButtonClick}>
              Login
            </Button>
          )

        </Navbar>
        {showCart && <CartPage items={cartItems} />}

        <Navbar bg="light" variant="light">
          <Nav className="mr-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/store" className="nav-link">
              Store
            </NavLink>
            <NavLink to="/ContactUs" className="nav-link">
              ContactUs
            </NavLink>
          </Nav>
        </Navbar>

        <Row>
          {products.map((product) => (
            <Col md={4} key={product.name}>
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






