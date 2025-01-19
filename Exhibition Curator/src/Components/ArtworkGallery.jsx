import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Form,
  Button,
  Pagination,
  Card,
} from "react-bootstrap";

const ArtworkGallery = () => {
  return (
    <Container fluid>
      {/* Logo and Navbar */}
      <Row className="mb-3">
        <Col>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#">Logo</Navbar.Brand>
          </Navbar>
        </Col>
      </Row>

      {/* Main Content */}
      <Row>
        {/* Search Box */}
        <Col xs={12} md={3}>
          <div className="p-3 bg-light">
            <h5>Search Box:</h5>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Keyword</Form.Label>
                <Form.Control type="text" placeholder="Enter keyword" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Filter</Form.Label>
                <Form.Control as="select">
                  <option>Option 1</option>
                  <option>Option 2</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Sort By</Form.Label>
                <Form.Control as="select">
                  <option>Newest</option>
                  <option>Oldest</option>
                </Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form>
          </div>
        </Col>

        {/* Artwork Grid */}
        <Col xs={12} md={9}>
          <Row>
            {[...Array(9)].map((_, index) => (
              <Col key={index} xs={6} md={4} className="mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150"
                  />
                  <Card.Body>
                    <Card.Title>Artwork {index + 1}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Pagination */}
      <Row className="mt-3">
        <Col>
          <Pagination className="justify-content-center">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default ArtworkGallery;
