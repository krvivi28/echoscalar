import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./product.css";
import { useNavigate } from "react-router-dom";



const Product = (props) => {
    const navigate =useNavigate();
    const goToProductDetails=()=>
    {
        navigate(`/products/${props.name}/${props.id}`);

    }
  return (
    <>
      <Card  onClick={goToProductDetails}  className="px-3 mx-2 my-2 curptr" style={{ width: "15rem" }}>
        <h1>{props.id}</h1>
        <Card.Img width={"50px"} height={"50px"} variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>props.name</Card.Title>
          <Card.Text>
            props.about
          </Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default Product;
