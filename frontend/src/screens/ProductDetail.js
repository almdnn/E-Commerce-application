import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  ListGroupItem,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import {listProductDetails} from '../actions/productActions';
import Loader from "../components/Loader";
import Message from "../components/Message";


const ProductDetail = ({history, match }) => {
    const [qty, setQty] = useState(1)

    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product } = productDetails
  

  useEffect(() => {
     dispatch(listProductDetails(match.params.id))
  }, [dispatch, match]);

  const addToCartHandler = () => {
      history.push(`/cart/${match.params.id}?qty=${qty}`)
  };

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
        <Row>
        <Col>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>
              Price: <strong>{product.price}</strong>
            </ListGroupItem>
            <ListGroupItem>Description: {product.description}</ListGroupItem>
            <ListGroupItem>
              Status:{" "}
              <strong>
                {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
              </strong>
            </ListGroupItem>

            {product.countInStock > 0 && (
                <ListGroupItem>
                    <Row>
                        <Col>Quantity:</Col>
                        <Col>
                        <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                            {[...Array(product.countInStock).keys()].map(x => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                </option>
                            ))}
                        </Form.Control>
                        </Col>
                    </Row>
                </ListGroupItem>
            )} 

            <ListGroupItem>
              <Button
                onClick={addToCartHandler}
                className="btn my-2"
                type="button"
                size="lg"
                disabled={product.countInStock === 0}
              >
                Add To Cart
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={6}>
          <Image
            src={product.image}
            alt={product.name}
            style={{ width: "400px", height: "auto" }}
            fluid
          />
        </Col>
      </Row>
      )}
      
    </>
  );
};

export default ProductDetail;
