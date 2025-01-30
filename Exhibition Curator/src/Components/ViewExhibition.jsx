import { useParams, useNavigate } from "react-router";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function ViewExhibition() {
  const { exhibitionName } = useParams();
  const [exhibition, setExhibition] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const exhibitions = JSON.parse(localStorage.getItem("exhibitions")) || {};
    setExhibition(exhibitions[exhibitionName] || { artworks: [] });
  }, [exhibitionName]);

  // 🔥 Function to Delete an Artwork from the Exhibition
  const deleteArtwork = (artPieceID) => {
    if (!exhibition) return;

    const updatedExhibition = {
      ...exhibition,
      artworks: exhibition.artworks.filter(
        (artPiece) => 
          (artPiece.museum === "vam" ? artPiece.systemNumber : artPiece.objectID) !== artPieceID
      ),
    };

    // Update localStorage
    const exhibitions = JSON.parse(localStorage.getItem("exhibitions")) || {};
    exhibitions[exhibitionName] = updatedExhibition;
    localStorage.setItem("exhibitions", JSON.stringify(exhibitions));

    // Update state to refresh UI
    setExhibition(updatedExhibition);
  };

  if (!exhibition || exhibition.artworks.length === 0) {
    return (
      <Container>
        <h1>{exhibitionName} Exhibition</h1>
        <p>No artworks in this exhibition.</p>
      </Container>
    );
  }

  return (
    <Container>
      <h1>{exhibitionName} Exhibition</h1>
      <Row>
        {exhibition.artworks.map((artPiece) => (
          <Col md={4} key={artPiece.systemNumber || artPiece.objectID}>
            <Card>
              {/* 🖼️ Display Image Based on Museum */}
              {artPiece.museum === "vam" ? (
                <Card.Img
                  variant="top"
                  src={`https://framemark.vam.ac.uk/collections/${artPiece.images?.[0]}/full/600,400/0/default.jpg`}
                  alt={artPiece?.titles?.[0]?.title || "Artwork"}
                />
              ) : (
                <Card.Img
                  variant="top"
                  src={artPiece?.primaryImageSmall || "https://via.placeholder.com/150"}
                  alt={artPiece?.title || "Artwork"}
                />
              )}

              <Card.Body>
                <Card.Title>
                  {artPiece?.titles?.[0]?.title || artPiece?.title || "Untitled"}
                </Card.Title>
                <Card.Text>
                  {artPiece?.briefDescription || artPiece?.artistDisplayName || "No description available."}
                </Card.Text>

                {/* 🔗 View Artwork Button */}
                <Button
                  variant="primary"
                  onClick={() => navigate(
                    artPiece.museum === "vam"
                      ? `/vam-artwork/${artPiece.systemNumber}`
                      : `/met-artwork/${artPiece.objectID}`
                  )}
                >
                  View Artwork
                </Button>

                {/* ❌ Delete Artwork Button */}
                <Button
                  variant="danger"
                  onClick={() => deleteArtwork(
                    artPiece.museum === "vam" ? artPiece.systemNumber : artPiece.objectID
                  )}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ViewExhibition;
