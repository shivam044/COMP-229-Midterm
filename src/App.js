// src/App.js
import React, { useState } from 'react';
import { Container, Tab, Tabs, Navbar } from 'react-bootstrap';
import AddProduct from './components/AddProduct';
import SignUpUser from './components/SignUpUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [key, setKey] = useState('AddProduct');

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">COMP 229 Midterm</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="mt-3">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 nav-tabs"
        >
          <Tab eventKey="AddProduct" title="Add Product">
            <div className="container-tab">
              <AddProduct />
            </div>
          </Tab>
          <Tab eventKey="SignUpUser" title="Sign Up User">
            <div className="container-tab">
              <SignUpUser />
            </div>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default App;
