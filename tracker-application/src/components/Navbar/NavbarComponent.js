import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import fire from "../../firebase";

/*
{fire.auth().onAuthStateChanged((user)=>{

  if(user){
    


  }else{

  }
        
})}
*/

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Tracker-Expense-Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/login">
              <Nav.Link>
                Login
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>
                Register
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/logout">
              <Nav.Link>
                Logout
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
