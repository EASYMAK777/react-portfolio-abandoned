import React from 'react';

import { Navbar, Nav, Container, } from "react-bootstrap";

function Header() {
    return (
    
      <Container>
  
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#About">Juan P Flores</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link href="#linked-in">Linked-in</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank Coder memes
            </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
  
      </Container>
  
  
  
  
  
  
  
    );
  }
  
  export default Header;
  
