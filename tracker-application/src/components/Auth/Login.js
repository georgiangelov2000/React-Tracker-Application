import React, { useState } from "react";
import { Form, Button, Container, Alert,Row,Col,} from "react-bootstrap";
import fire from "../../firebase";

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
        history.push("/tracker");
      })
      .catch((err) => {
        setError(err.message);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col  xs={6} className="m-auto p-5 bg-primary text-white">
          <h1>Login</h1>
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

            <Button variant="warning" type="submit">
              Login
            </Button>
          </Form>
          {error ? <Alert variant="danger">{error}</Alert> : null}
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
