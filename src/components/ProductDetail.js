import React from "react"; 
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductDetail = (Products) => {
  const { id } = useParams();
  const product = Products.find((p) => p.id === parseInt(id));
  
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









  