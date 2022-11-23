import React, { useEffect } from "react";
import { useState } from "react";
import "./prdetail.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useParams } from "react-router-dom";
import { samplephone } from "../../constants/samplephone";

const ProductDetail = () => {
  const [flag, setflag] = useState(0);
  const [productDetail, setProductDetail] = useState({});
  console.log("finding");
  const params = useParams();
  console.log(params);
  const id = params.productid;

  const getProductDetails = (id) => {
    const pdata = samplephone.find((data) => {
      return data.id === id;
    });

    console.log("find kr liya");
    console.log(pdata);
    setProductDetail(pdata);
    setflag(1);
  };

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  // console.log(getProductDetails);

  // useEffect(() => {
  //     getProductDetails(productId);
  // }, [productId]);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Vivek
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="container">
        <img src={productDetail.img} alt="" />
        <img src={productDetail.img} alt="" />
        <img src={productDetail.img} alt="" />
      </div>
      <h1 className="text-success">Hi I am produvt details</h1>
      <p>{productDetail.about} </p>
      <p>{productDetail.name} </p>
    </>
  );
};

export default ProductDetail;
