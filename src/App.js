import React from "react";
import { Container} from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Store from "./components/Store";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import ProductDetail from "./components/ProductDetail";
import { products } from "./components/Home";
import Loginpage from "./components/Loginpage";




const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/products/:id" element={<ProductDetail products={products} />} />
        <Route path="LoginPage" element={<LoginPage/>}/>

      </Routes>
    </Container>
  );
};

export default App;

