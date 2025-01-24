import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from 'react-router'
import QuickSearch from "./QuickSearch";

function NavBar() {

  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    navigate(`/all-artworks?query=${encodeURIComponent(searchTerm)}`)
  }

  return (
    <nav className="navBar">
      <Container>
        <Row>
          <Col md={2}>
            <Link to="/">Home</Link>
          </Col>

          <Col md={2}>
            <Link to="/all-artworks">All Artworks</Link>
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
            <QuickSearch onSearch = {handleSearch} />
          </Col>
        </Row>
      </Container>
    </nav>
  );
}

export default NavBar;