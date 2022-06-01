import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./NavBar.module.css";
import { Container, Navbar , Nav} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
interface INavBarProps {}



const NavBar: React.FC<INavBarProps> = (props) => {
  
  return (
    <div className={style.NavBar} data-testid="NavBar">
     <Navbar bg="primary" variant="dark">
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand>Navbar</Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
        <LinkContainer to='/'>
        <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/thumbnail">
        <Nav.Link>Features</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/editor/0">
        <Nav.Link>Pricing</Nav.Link>
        </LinkContainer>
      
      
    </Nav>
    </Container>
  </Navbar>
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;
