import React, { useEffect } from "react";

//import redux stuff
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

//Bootstrap
import { Col, Row } from "react-bootstrap";

//Components
import Product from "../components/Product";

const HomeScreen = () => {
  //set  dispatcher
  const dispatch = useDispatch();

  //gets the productList from the state
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    // fills up data in the state
    dispatch(listProducts());
  }, [dispatch]);

  console.log(products, "wassup");
  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
