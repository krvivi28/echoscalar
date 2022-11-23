import React from "react";
import "./navbar.css";
// import Logo from "../logo/logo";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
         
          <Navbar.Brand to="#">Scaler</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Create Interview</Nav.Link>
              </LinkContainer>
              
              <LinkContainer to="/upcoming">
                <Nav.Link>Upcoming Interviews</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/apply">
                <Nav.Link>Apply</Nav.Link>
              </LinkContainer>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;
