import { useContext, useRef} from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import CartContext from "./CartContext";
import NavBar from "./NavBar";

const SignupPage = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const cartCtx = useContext(CartContext);
  const [errorMessage, setErrorMessage] = useState(null);

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredConfirmPassword = confirmPasswordRef.current.value;

    if (enteredPassword !== enteredConfirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA85r2CpegHzksRz5PyHVZwav2epZF8c2o", {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        cartCtx.login(data.idToken);
        navigate('/home');
      } else {
        const error = await response.json();
        let errorMessage = "Signup failed!";
        throw new Error(errorMessage);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };


  return (
    <div>
    <NavBar></NavBar>
   
    
    <Container>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            innerRef={emailRef}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            innerRef={passwordRef}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input
            type="password"
            name="confirm-password"
            id="confirm-password"
            innerRef={confirmPasswordRef}
          />
        </FormGroup>
        <Button type="primary" onClick={submitHandler}>
              Sign Up
            </Button>
      </Form>
    </Container>
    </div>
  );}
   export default SignupPage;