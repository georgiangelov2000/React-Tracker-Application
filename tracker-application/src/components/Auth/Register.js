import React, { useState } from "react";
import { Form, Button, Container, Alert, Col, Row } from "react-bootstrap";
import fire from "../../firebase";
import {Link} from "react-router-dom";

const Register = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const currentUser = fire.auth().currentUser;
        currentUser.updateProfile({
          displayName: setDisplayName(displayName),
        });
        console.log(currentUser);
        history.push("/login");
      })
      .catch((error) => {
        setError(error.message);
      });
    history.push("/register");
  };

  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col xs={6} className="m-auto p-5 bg-primary text-white">
          <h1>Register Form</h1>
          <Form onSubmit={onSubmit} className="mb-2">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={onEmailChange}
                value={email}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={onPasswordChange}
                value={password}
              />
            </Form.Group>

            <Button className="mb-2" variant="warning" type="submit">
              Register
            </Button>
            <p>Already have account ?
              <Link className="text-white" to="/"> Login</Link>
            </p>
          </Form>
          {error ? (
            <>
              <Alert variant="danger">{error}</Alert>
            </>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
