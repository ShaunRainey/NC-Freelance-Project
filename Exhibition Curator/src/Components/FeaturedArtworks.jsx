import metRequests from "../Utilities/metMuseumApi";
import { useState, useEffect } from "react";
import { Card, Container, Row, Col, Form } from "react-bootstrap";
import { Link } from 'react-router'
import Loading from "./Loading";
import handleError from "../Utilities/handleError";
import FilterMuseum from "./FilterMuseum";
import VamRandom from "./VamRandom";

function FeaturedArtworks({artworkIDs, setArtworkIDs, artworks, setArtworks, loading, setLoading,museum, setMuseum, handleMuseumChange}) {

  useEffect(() => {
    const getArtworksIDs = async () => {
      setLoading(true)
      const imagedArtworks = await metRequests.getRandomImagedArtworks();
      setArtworkIDs(imagedArtworks);
    };
    getArtworksIDs();
    setLoading(false)
  }, []);

  useEffect(() => {
    if (artworkIDs.length !== 0) {
      const fetchArtworks = async () => {
        const artworkPromises = artworkIDs.map((ID) => {
          return metRequests.getObjectByID(ID);
        });
        const artworkData = await Promise.all(artworkPromises);

        setArtworks(artworkData);
      };
      fetchArtworks();
    }
  }, [artworkIDs]);


  if(loading){
    return (
    <Container>
      <Loading/>
    </Container>)
  } else if (museum === "The Met Museum"){

    return (
      <Container>
        <Row>
          <Form>
            <FilterMuseum handleMuseumChange = {handleMuseumChange}/>
          </Form>
        </Row>
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
  } else {
    return (
         <Container>
          <Row>
            <Form>
             <FilterMuseum handleMuseumChange = {handleMuseumChange}/>
            </Form>
          </Row>
        </Container>
       
      // <VamRandom artworkIDs={artworkIDs} setArtworkIDs={setArtworkIDs} artworks={artworks} setArtworks={setArtworks} loading = {loading} setLoading = {setLoading} museum={museum} setMuseum={setMuseum}/>
    )
  }
}

export default FeaturedArtworks;