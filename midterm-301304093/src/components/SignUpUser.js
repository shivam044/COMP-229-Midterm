// src/components/SignUpUser.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Container } from 'react-bootstrap';

const SignUpUser = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert(JSON.stringify(data, null, 2));
    console.log(data);
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="secondary" type="button" className="ms-2">
          Cancel
        </Button>
      </Form>
    </Container>
  );
};

export default SignUpUser;
