import React, { useState } from "react";
import { Container, Form, FormGroup, FormLabel as Label, FormControl as Input, Button } from "react-bootstrap";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      email: email,
      password: password
      
    };

    try {
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[AIzaSyA85r2CpegHzksRz5PyHVZwav2epZF8c2o]', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)});    

      const data = await response.json();

      console.log('Success:', data);
      
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormGroup>
        <Button type="submit" color="primary">Submit</Button>
        <Button bsStyle="primary" onClick={handleSubmit}>
              Login
            </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;


  