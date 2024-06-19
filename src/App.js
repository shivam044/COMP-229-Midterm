// src/App.js
import React, { useState } from 'react';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import AddProduct from './components/AddProduct';
import SignUpUser from './components/SignUpUser';

const App = () => {
  const [activeForm, setActiveForm] = useState('AddProduct');

  const renderForm = () => {
    switch (activeForm) {
      case 'AddProduct':
        return <AddProduct />;
      case 'SignUpUser':
        return <SignUpUser />;
      default:
        return <AddProduct />;
    }
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">COMP 229 Midterm</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setActiveForm('AddProduct')}>Add Product</Nav.Link>
              <Nav.Link onClick={() => setActiveForm('SignUpUser')}>Sign Up User</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-5">
        {renderForm()}
      </Container>
    </div>
  );
};

export default App;
