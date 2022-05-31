import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./NavBar.module.css";
import { Container, Navbar , Nav} from "react-bootstrap";

interface INavBarProps {}
interface INavBarState {}

const initialState: INavBarState = {};

const NavBar: React.FC<INavBarProps> = (props) => {
  
  return (
    <div className={style.NavBar} data-testid="NavBar">
     <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;
