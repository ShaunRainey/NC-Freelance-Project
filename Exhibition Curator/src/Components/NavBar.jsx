import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router'
import QuickSearch from "./QuickSearch";

function NavBar() {
  return (
    <nav className="navBar">
      <Container>
        <Row>
          <Col md={2}>
            <Link to="/">Home</Link>
          </Col>

          <Col md={2}>
            <Link to="/detailed-search">Detailed Search</Link>
          </Col>

          <Col md={2}>
            <Link to="/my-exhibitions">My Exhibitions</Link>
          </Col>

          <Col md={2}>
            <Link to="/account-settings">Account Settings</Link>
          </Col>

          <Col md={4}>
            <QuickSearch />
          </Col>
        </Row>
      </Container>
    </nav>
  );
}

export default NavBar;