import React, { useState } from "react";

import { Container, Form, FormGroup, FormLabel as Label, FormControl as Input, Button } from "react-bootstrap";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: name,
      email: email,
      phone: phone
    };

    try {
      const response = await fetch('https://crudcrud.com/api/cd71fff0dfb348029f928451b4eb546e/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      console.log('Success:', data);
      setName('');
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    
      <Container>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </FormGroup>
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
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              type="text"
              name="phone"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
            />
          </FormGroup>
          <Button type="submit" color="primary">Submit</Button>
        </Form>
      </Container>
   
  );
};

export default ContactUs;

