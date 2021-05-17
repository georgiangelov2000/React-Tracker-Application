import React,{useState} from "react";
import {Form,Button,Container} from "react-bootstrap";
import  fire  from "../../firebase";

const Register = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);


  const onSubmit=(e)=>{
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(email,password)
    .then((userCredentials) =>{
      const currentUser=fire.auth().currentUser;
      currentUser.updateProfile({
        displayName:setDisplayName(displayName)
      })
      console.log(currentUser)
      history.push("/login")
    })
    .catch((error)=>{
      setError(error.message)
    });
    history.push("/register")
  }

  return (
    <Container>
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
    </Container>
  );
};

export default Register;
