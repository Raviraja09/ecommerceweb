import React from "react";
import { Container} from "react-bootstrap";
import { useParams } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { products } from "./Home";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  console.log(product);
  
  return (
    <Container>
      <Row>
        <Col md={6}>
          <img src={product.image} alt={product.name} />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <p>{product.description}</p>
        </Col>
      </Row>
    </Container>
  );
};
export default ProductDetail;










  