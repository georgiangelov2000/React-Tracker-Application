import React, { useContext } from "react";
import { Nav, Navbar, Jumbotron } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import UserContext from "../../context/UserContext";

const NavbarComponent = () => {
  const context = useContext(UserContext);

  return (
    <div>
      {!context.isAuthenticated ? (
        <>
          <Jumbotron className=" text-left mb-0 bg-light p-4">
            <h1>Tracker-Expense-Application</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

          <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/">
                  <Nav.Link className="text-primary">Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Nav.Link className="text-primary">Register</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </Jumbotron>
        </>
      ) : (
        <>
          <Jumbotron className=" text-left mb-0 bg-light p-4 ">
            <h1>Tracker-Expense-Application</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/tracker">
                  <Nav.Link className="text-primary">Welcome {context.username}</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/logout">
                  <Nav.Link className="text-primary">Logout</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </Jumbotron>
        </>
      )}
    </div>
  );
};

export default NavbarComponent;
