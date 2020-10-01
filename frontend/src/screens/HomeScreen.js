import React from "react";

//Bootstrap
import { Col, Row } from "react-bootstrap";

//Components 
import Product from "../components/Product";
import products from "../util/products";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
