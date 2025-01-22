import { Card, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

function QuickSearch() {

    const [quickSearchTerm, setQuickSearchTerm] = useState(null);



  return (
    <Container>
        <Row>
            <form className="d-flex">
                <input className="form-control mr-sm-2" type="search" placeholder="Quick Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Go!</button>
            </form>
        </Row>
    </Container>
  );
}

export default QuickSearch;
