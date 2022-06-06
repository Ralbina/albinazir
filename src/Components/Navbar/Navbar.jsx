import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import logo from "../../assets/image/logoWhite.PNG";
import logoup from "../../assets/image/logoup.PNG";
import logo1 from "../../assets/image/logo1-2.PNG";
import { NavLink } from "react-router-dom";

const Navbar1 = () => {
  return (
    <>
      <Navbar.Brand href="#home">
        <img alt="" src={logoup} width="1200" height="80" className="logoup " />{" "}
      </Navbar.Brand>
      <Navbar bg="white" variant="light">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="40"
            height="70"
            className="d-inline-block align-top m-3"
          />{" "}
          <img alt="" src={logo1} width="130" height="30" className="logo1" />{" "}
        </Navbar.Brand>
        <Container>
          <Nav className="me-auto">
            <NavLink className="home" to="/">
              Home
            </NavLink>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 me-2-outline-secondary"
              aria-label="Search"
            />
            <Button className="btn " variant="outline-secondary">
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar1;
