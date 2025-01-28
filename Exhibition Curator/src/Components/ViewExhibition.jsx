import { useParams } from "react-router";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

function ViewExhibition() {
  const { exhibitionName } = useParams();
  const exhibitions = JSON.parse(localStorage.getItem("exhibitions")) || {};
  const [artworks, setArtworks] = useState(exhibitions[exhibitionName] || []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const removeArtwork = (index) => {
    const updatedArtworks = artworks.filter((_, i) => i !== index);
    setArtworks(updatedArtworks);
    exhibitions[exhibitionName] = updatedArtworks;
    localStorage.setItem("exhibitions", JSON.stringify(exhibitions));
  };

  const nextArtwork = () => {
    setCurrentIndex((prev) => (prev + 1) % artworks.length);
  };

  const prevArtwork = () => {
    setCurrentIndex((prev) => (prev - 1 + artworks.length) % artworks.length);
  };

  if (artworks.length === 0) {
    return (
      <Container>
        <h1>{exhibitionName}</h1>
        <p>No artworks in this exhibition.</p>
      </Container>
    );
  }

  const currentArtwork = artworks[currentIndex];

  return (
    <Container>
      <h1>{exhibitionName}</h1>
      <Row>
        <Col>
          <img src={currentArtwork.primaryImage} alt={currentArtwork.title} className="Individual-Artwork" />
        </Col>
        <Col>
          <h2>{currentArtwork.title}</h2>
          <p>Date: {currentArtwork.objectDate}</p>
          <p>Department: {currentArtwork.department}</p>
          <Button onClick={() => removeArtwork(currentIndex)}>Remove</Button>
          <Button onClick={prevArtwork}>Previous</Button>
          <Button onClick={nextArtwork}>Next</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ViewExhibition;
