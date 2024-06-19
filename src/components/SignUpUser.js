import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';

const SignUpUser = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match');
      return;
    } else { 
      alert(JSON.stringify(data, null, 2));
      console.log(data,'form data');
    }
  };

  return (
    <Container className="mb-2">
      <Card className="mx-auto" style={{ maxWidth: "600px" }}>
        <Card.Header as="h5">Sign Up</Card.Header>
        <Card.Body>
          <Form className="justify-content-center">
          <Row>
          <Col md={12} className="mb-3">
            <Form.Group >
              <Form.Label>First Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter first name" 
                {...register('firstName', { required: true })} 
              />
              {errors.firstName && <Form.Text className="text-danger">This field is required</Form.Text>}
                </Form.Group>
                </Col>
                </Row>

            <Row>
            <Col md={12} className="mb-3">
            <Form.Group >
              <Form.Label>Last Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter last name" 
                {...register('lastName', { required: true })} 
              />
              {errors.lastName && <Form.Text className="text-danger">This field is required</Form.Text>}
                </Form.Group>
                </Col>
                </Row>

            <Row>
            <Col md={12} className="mb-3">
            <Form.Group >
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter username" 
                {...register('userName', { required: true })} 
              />
              {errors.userName && <Form.Text className="text-danger">This field is required</Form.Text>}
                </Form.Group>
                </Col>
                </Row>

            <Row>
            <Col md={12} className="mb-3">
            <Form.Group >
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })} 
              />
              {errors.email && <Form.Text className="text-danger">This field is required and must be a valid email</Form.Text>}
                </Form.Group>
                </Col>
                </Row>

            <Row>
            <Col md={12} className="mb-3">
            <Form.Group >
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Enter password" 
                {...register('password', { required: true })} 
              />
              {errors.password && <Form.Text className="text-danger">This field is required</Form.Text>}
                </Form.Group>
                </Col>
                </Row>

            <Row>
            <Col md={12} className="mb-3">
            <Form.Group >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Confirm password" 
                {...register('confirmPassword', { required: true })} 
              />
              {errors.confirmPassword && <Form.Text className="text-danger">This field is required</Form.Text>}
                </Form.Group>
                </Col>
                </Row>

            <div className="d-flex justify-content-end">
              <Button variant="secondary" type="button" className="me-2">
                Cancel
              </Button>
              <Button variant="primary" type="button" onClick={handleSubmit(onSubmit)}>
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
