import { Container, ListGroup, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useState } from "react";
import handleError from "../Utilities/handleError";

function SavedExhibitions() {
  const navigate = useNavigate();
  const [exhibitions, setExhibitions] = useState(
    JSON.parse(localStorage.getItem("exhibitions")) || {}
  );

  const deleteExhibition = (exhibitionName) => {
    // Confirm with the user
    if (window.confirm(`Are you sure you want to delete "${exhibitionName}"?`)) {
      const updatedExhibitions = { ...exhibitions };
      delete updatedExhibitions[exhibitionName];
      localStorage.setItem("exhibitions", JSON.stringify(updatedExhibitions));
      setExhibitions(updatedExhibitions); // Update state
      alert(`Exhibition "${exhibitionName}" deleted.`);
    }
  };

  return (
    <Container>
      <h1>Saved Exhibitions</h1>
      {Object.keys(exhibitions).length > 0 ? (
        <ListGroup>
          {Object.keys(exhibitions).map((exhibition) => (
            <ListGroup.Item key={exhibition}>
              <Row>
                <Col xs={8}>
                  <span
                    onClick={() => navigate(`/exhibition/${exhibition}`)}
                    style={{ cursor: "pointer", fontWeight: "bold" }}
                  >
                    {exhibition}
                  </span>
                </Col>
                <Col xs={4} className="text-end">
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteExhibition(exhibition)}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p>No exhibitions saved yet.</p>
      )}
    </Container>
  );
}

export default SavedExhibitions;
