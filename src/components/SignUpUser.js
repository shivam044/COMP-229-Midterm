// src/components/SignUpUser.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Container, Card } from 'react-bootstrap';

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
      <Card>
        <Card.Header as="h5">Sign Up</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter first name" 
                {...register('firstName', { required: true })} 
              />
              {errors.firstName && <Form.Text className="text-danger">This field is required</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter last name" 
                {...register('lastName', { required: true })} 
              />
              {errors.lastName && <Form.Text className="text-danger">This field is required</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter username" 
                {...register('userName', { required: true })} 
              />
              {errors.userName && <Form.Text className="text-danger">This field is required</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })} 
              />
              {errors.email && <Form.Text className="text-danger">This field is required and must be a valid email</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Enter password" 
                {...register('password', { required: true })} 
              />
              {errors.password && <Form.Text className="text-danger">This field is required</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Confirm password" 
                {...register('confirmPassword', { required: true })} 
              />
              {errors.confirmPassword && <Form.Text className="text-danger">This field is required</Form.Text>}
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button variant="secondary" type="button" className="me-2">
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SignUpUser;
