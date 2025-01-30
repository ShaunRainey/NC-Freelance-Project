import {Container, Row, Form} from "react-bootstrap";

function FilterMuseum({handleMuseumChange}) {
  return (
        <Row>
            <Form.Group className="mb-3">
                <Form.Label>Filter by Museum</Form.Label>
                <Form.Control as="select" onChange={handleMuseumChange}>
                <option>The Met Museum</option>
                <option>Victoria and Albert Museum</option>
                </Form.Control>
            </Form.Group>   
        </Row>
  );
}

export default FilterMuseum;





