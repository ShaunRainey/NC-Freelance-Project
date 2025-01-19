import { Container, Row, Col } from "react-bootstrap";

function NavBar() {
  return (
    <Container>
      <Row>
        <Col>
          <p>Home</p>
        </Col>

        <Col>
          <p>Detailed Search</p>
        </Col>

        <Col>
          <p>My Exhibitions</p>
        </Col>

        <Col>
          <p>Account</p>
          {/* 
          Account Details
          Saved exhibitions 
          */}
        </Col>
      </Row>
    </Container>
  );
}

export default NavBar;


