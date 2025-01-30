import vamRequests from "../Utilities/vamMuseum"
import { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router'
import Loading from "./Loading";
import handleError from "../Utilities/handleError";

function VamRandom({artworks, setArtworks, loading, setLoading, museum}) {

    useEffect(() => {
    const getArtworks = async () => {
      setLoading(true)
      
      const imagedArtworks = await vamRequests.fetchRandomObjects(200);
      setArtworks(imagedArtworks);
      setLoading(false)
    };
    getArtworks();
  }, [museum]);

 if(loading){
    return (<Loading/>)
  } else{
      
      return (
          <Container>
        <Row>
          {artworks.map((artwork) => (
              
              <Col md={4} className="mb-4" key={artwork["systemNumber"]} >
              {/* <Link to={`/artwork/${artwork.objectID}`}> */}
                <Card className="custom-card">
                  <Card.Img
                    variant="top"
                    src={`https://framemark.vam.ac.uk/collections/${artwork["_primaryImageId"]}/full/600,400/0/default.jpg`}
                    alt="Artwork"
                    className="Card-img"
                    />
                  <Card.Body className="custom-card-body">
                    <Card.Title className="mb-2">
                      {artwork["_primaryTitle"] || "Untitled"}
                    </Card.Title>
                    <Card.Text className="custom-card-text">
                      {artwork["_primaryMaker"]["name"] || "Unknown Artist"}
                    </Card.Text>
                  </Card.Body>
                </Card>
              {/* </Link> */}
            </Col>
          ))}
        </Row>
      </Container>
    );
}
}

export default VamRandom;
