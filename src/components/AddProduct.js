import React, { useState } from "react";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
    console.log(formData, "form data");
  };

  return (
    <Container className=" mb-2">
      <Card className="mx-auto" style={{ maxWidth: "600px" }}>
        <Card.Header as="h5">Add Product</Card.Header>
        <Card.Body>
          <Form className="justify-content-center">
            <Row>
              <Col md={12} className="mb-3">
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={12} className="mb-3">
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    placeholder="Enter description"
                    onChange={handleChange}
                    value={formData.description}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={12} className="mb-3">
                <Form.Group>
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    name="category"
                    placeholder="Enter category"
                    onChange={handleChange}
                    value={formData.category}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={12} className="mb-3">
                <Form.Group>
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    name="quantity"
                    placeholder="Enter quantity"
                    onChange={handleChange}
                    value={formData.quantity}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={12} className="mb-3">
                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    onChange={handleChange}
                    value={formData.price}
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex justify-content-end">
              <Button variant="secondary" type="button" className="me-2">
                Cancel
              </Button>
              <Button variant="primary" type="button" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddProduct;
