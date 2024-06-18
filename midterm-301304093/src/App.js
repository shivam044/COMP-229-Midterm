// src/App.js
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
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
    <Container className="mt-5">
      <div className="d-flex justify-content-around mb-4">
        <Button variant="primary" onClick={() => setActiveForm('AddProduct')}>
          Add Product
        </Button>
        <Button variant="secondary" onClick={() => setActiveForm('SignUpUser')}>
          Sign Up User
        </Button>
      </div>
      {renderForm()}
    </Container>
  );
};

export default App;
