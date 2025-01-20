import { Card, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import metRequests from "../Utilities/metMuseumApi";
import { useParams } from "react-router";

function IndividualArtwork({artPiece, setArtPiece}) {
    console.log(artPiece)
    const {objectID} = useParams() 

  useEffect(() => {
    const fetchArtPiece = async (objectID) => {
        const artPiece = metRequests.getObjectByID(objectID);
        const artPieceData = await Promise.resolve(artPiece);

        setArtPiece(artPieceData);
    };
    fetchArtPiece(objectID)
  }, [objectID]);
  console.log(artPiece)

  if(artPiece){
      return (
          <Container>
              <Row>
                <Col md={4} className="mb-4">
                <img src={artPiece["primaryImage"]} alt="" className="Individual-Artwork" /> 
                </Col>
                <Col md={8} className="mb-4">
                    <h1>{artPiece.title} </h1>
                    <h2>Date</h2>
                    <p>For more information, please visit: {artPiece.objectURL}</p>
                </Col>
              </Row>
          </Container>
      );
  }
}

export default IndividualArtwork;
