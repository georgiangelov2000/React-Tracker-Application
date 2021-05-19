import React,{useContext} from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import UserContext from "../../context/UserContext";


const NavbarComponent = () => {
  const context =useContext(UserContext);
  
  return (
    <div>
      {!context.isAuthenticated ? (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Tracker-Expense-Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>
                Login
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>
                Register
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      ):(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Tracker-Expense-Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/tracker">
              <Nav.Link>
                Welcome {context.username}
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
      )}
      
    </div>
  );
};

export default NavbarComponent;
