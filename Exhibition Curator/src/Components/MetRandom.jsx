import metRequests from "../Utilities/metMuseumApi";
import { useState, useEffect } from "react";
import { Card, Container, Row, Col, Form } from "react-bootstrap";
import { Link } from 'react-router'
import Loading from "./Loading";
import FilterMuseum from "./FilterMuseum";

function MetRandom({artworkIDs, setArtworkIDs, artworks, setArtworks, loading, setLoading, museum, setMuseum, handleMuseumChange}) {

  // Fetch artwork IDs and artwork data in one useEffect
  useEffect(() => {
    const getArtworksIDs = async () => {
      setLoading(true);  // Set loading state to true before fetching
      

      try {
        const imagedArtworks = await metRequests.getRandomImagedArtworks();
        console.log(imagedArtworks);

        const artworkPromises = imagedArtworks.map((ID) => {
          return metRequests.getObjectByID(ID);
        });
        const artworkData = await Promise.all(artworkPromises);

        setArtworks(artworkData);  // Update state with fetched artworks
      } catch (error) {
        console.error("Error fetching artwork data:", error);
        // Optionally, handle error and set loading to false
        setLoading(false);
      }

      setLoading(false);  // Set loading state to false after fetch is complete
    };

    getArtworksIDs();
  }, [museum]);  // Only runs once when the component is mounted

  if (loading) {
    return <Loading />;  // Display loading component while data is being fetched
  }

  return (
    <Container>

      <Row>
        {artworks.map((artwork) => (
          <Col md={4} key={artwork["objectID"]} className="mb-4">
            <Link to={`/artwork/${artwork.objectID}`}>
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src={artwork["primaryImageSmall"]}
                  alt="Artwork"
                  className="Card-img"
                />
                <Card.Body className="custom-card-body">
                  <Card.Title className="mb-2">
                    {artwork.title || "Untitled"}
                  </Card.Title>
                  <Card.Text className="custom-card-text">
                    {artwork.artistDisplayName || "Unknown Artist"}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MetRandom;
