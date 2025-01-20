import { Container, Row, Col } from "react-bootstrap";

function NavBar() {
  return (
    <Container className="NNNN">
      <Row>
        <Col md={2}>
          <a href="/">Home</a>
        </Col>

        <Col md={2}>
          <a href="">Detailed Search</a>
        </Col>

        <Col md={2} >
          <a href="">My Exhibitions</a>
        </Col>

        <Col md={2}>
          <a href="">Account Settings</a>
        </Col>
  
        <Col md={4}>
          <form className="d-flex">
          <input className="form-control mr-sm-2" type="search" placeholder="Quick Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Go!</button>
          </form>
        </Col>

      </Row>
    </Container>
  );
}

export default NavBar;


