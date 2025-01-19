import { Card, Container, Row, Col } from "react-bootstrap";

function IndividualArtwork({artworks, exampleArtwork}) {
    console.log(exampleArtwork)
  return (
    <Container>
        <Row>
            <Col>
                <Card className="custom-card">
                    <Card.Img
                        variant="top"
                        src={exampleArtwork["primaryImageSmall"]}
                        alt="Artwork"
                        className="Card-img"
                    />
                    <Card.Body className="custom-card-body">
                        <Card.Title className="mb-2">
                            {exampleArtwork.title || "Untitled"}
                        </Card.Title>
                        <Card.Text className="custom-card-text">
                            {exampleArtwork.artistDisplayName || "Unknown Artist"}
                            { " " + exampleArtwork.objectDate || "Unknown Date"}
                        </Card.Text>
                        <Card.Text>
                            {"To view more detailed information, visit: " + "\n" + exampleArtwork.objectURL || "Unknown Date"}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default IndividualArtwork;
