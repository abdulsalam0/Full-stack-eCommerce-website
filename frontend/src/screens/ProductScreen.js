import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//Bootstrap
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

//Components
import Rating from "../components/Rating";


const ProductScreen = ({ match }) => {

  const [product, setProduct] = useState({});

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/product/${match.params.id}`);

      setProduct(data);
    };

    getData();
  }, [match.params.id]);
  // const product = Products.find((product) => product._id === match.params.id);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h4>{product.name}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                numReviews={`${product.numReviews} Review`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: £{product.price}</ListGroup.Item>
            <ListGroup.Item>Description: £{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>£{product.price}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
