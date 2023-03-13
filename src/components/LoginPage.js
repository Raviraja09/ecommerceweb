import { useContext, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import CartContext from "./CartContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const cartCtx = useContext(CartContext);

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    setIsLoading(true);

    try {
      const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA85r2CpegHzksRz5PyHVZwav2epZF8c2o", {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "content-Type": "application/json",
        },
      });

      setIsLoading(false);

      if (response.ok) {
        const data = await response.json();
        cartCtx.login(data.idToken);
        navigate('/home');
      } else {
        const errorData = await response.json();
        let errorMessage = "Authentication failed!";
        throw new Error(errorMessage);
      }
    } catch (error) {
      alert(error.message);
    }
  };


  return (
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
        <Button type="submit" color="primary">Submit</Button>
        <Button bsStyle="primary" onClick={submitHandler}>
              Login
            </Button>
      </Form>
    </Container>
  );
}


export default LoginPage;