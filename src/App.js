import React, { useState } from "react";
import { Container} from "react-bootstrap";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./components/About";
import Store from "./components/Store";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import ProductDetail from "./components/ProductDetail";
import { products } from "./components/Home";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";


const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  function handleLogin() {
    setAuthenticated(true);
  }
  function handleSignUp(){
    setAuthenticated(true);
  }

  function renderStore() {
    if (authenticated) {
      return <Store />;
    } else {
      return <Navigate to="/LoginPage" />;
    }
  }

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/store" element={renderStore} />
        <Route path="/about" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/productDetail/:id" element={<ProductDetail products={products} />} />
        <Route path="/LoginPage" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/Signup" element={<SignupPage onLogin={handleSignUp} />} />
        
      </Routes>
    </Container>
  );
};

export default App;


