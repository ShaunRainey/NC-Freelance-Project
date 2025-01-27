import { Card, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

function QuickSearch({onSearch}) {

    const [quickSearchTerm, setQuickSearchTerm] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchTerm =  event.target.querySelector('input').value;
        onSearch(searchTerm);
    }

  return (
    <Container>
        <Row>
            <form className="d-flex" onSubmit={handleSubmit}>
                <input className="form-control mr-sm-2" type="search" placeholder="Quick Search" aria-label="Search"  
                // onChange={handleInputChange}
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Go!</button>
            </form>
        </Row>
    </Container>
  );
}

export default QuickSearch;
