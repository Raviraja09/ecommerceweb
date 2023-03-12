import { useContext, useRef, useState } from "react";
import { useHistory } from 'react-router';
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import CartContext from "./CartContext";

const LoginPage = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const cartCtx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    setIsLoading(true);

    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[AIzaSyA85r2CpegHzksRz5PyHVZwav2epZF8c2o]", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        cartCtx.login(data.idToken);
        history.replace("/store");
      })
      .catch((err) => {
        alert(err.message);
      });
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
};

export default LoginPage;


  