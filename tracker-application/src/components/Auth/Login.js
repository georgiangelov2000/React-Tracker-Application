import React, { useState } from "react";
import { Form, Button, Container, Alert,Row,Col,} from "react-bootstrap";
import fire from "../../firebase";
import {Link} from "react-router-dom";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const loginSubmitForm = (e) => {
    e.preventDefault();

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log("user signed in");
        history.push("/main");
      })
      .catch((err) => {
        setError(err.message);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <Container className="mt-5 mb-5">
        <h5 className="text-center">Login Form</h5>
      <Row>
        <Col  xs={6} className="m-auto p-5 bg-primary text-white">
          <h2>Tracker-Expense-Application</h2>
          <Form onSubmit={loginSubmitForm} className="mb-2">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={onEmailChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={onPasswordChange}
              />
            </Form.Group>

            <Button className="mb-2" variant="warning" type="submit">
              Login
            </Button>
            <p>Don't Have an Account ?
              <Link to="/register" class="text-white"> Register</Link>
            </p>
          </Form>
          {error ? <Alert variant="danger">{error}</Alert> : null}
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
