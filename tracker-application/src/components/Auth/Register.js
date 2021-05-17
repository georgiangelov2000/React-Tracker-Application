import React,{useState} from "react";
import {Form,Button} from "react-bootstrap";
import { auth } from "../../firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);


  const onSubmit=(e)=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((userCredentials) =>{
      const currentUser=auth.currentUser;
      currentUser.updateProfile({
        displayName:setDisplayName(displayName)
      })
      console.log(currentUser)
    })
    .catch((error)=>{
      setError(error.message)
    });
  }

  return (
    <div>
        <h1>Register</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"
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

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      {error? <>{error}</> : null }
    </div>
  );
};

export default Register;
