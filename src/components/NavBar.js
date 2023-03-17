import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import CartPage from "./CartPage";

const NavBar = ({ cartItems, handleCartButtonClick, handleLoginButtonClick, handleSignUpButtonClick, showCart }) => {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>The Generics</Navbar.Brand>
        <Button variant="primary" className="btn btn-primary mr-2" onClick={handleCartButtonClick}>
           Cart
        </Button>
        <Button variant="primary" className="btn btn-primary mr-2" onClick={handleLoginButtonClick}>
          <Link to="/LoginPage" className="text-white">
            Login
          </Link>
        </Button>
        <Button variant="primary" className="btn btn-primary" onClick={handleSignUpButtonClick}>
          <Link to="/SignupPage" className="text-white">
            Signup
          </Link>
          <Button variant="primary">
      Logout
    </Button>
        
          
        </Button>
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
    </>
  );
};

export default NavBar;


