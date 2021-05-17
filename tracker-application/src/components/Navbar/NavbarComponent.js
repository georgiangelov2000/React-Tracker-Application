import React from "react";
import { Link as RRNavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Tracker-Expense-Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link to="/login"  tag={RRNavLink}>
              Login
            </Nav.Link>
            <Nav.Link  to="/register" tag={RRNavLink} >
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
