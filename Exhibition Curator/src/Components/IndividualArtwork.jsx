import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import metRequests from "../Utilities/metMuseumApi";
import { useParams } from "react-router";
import Loading from "./Loading";
import handleError from "../Utilities/handleError";

function IndividualArtwork({artPiece, setArtPiece, loading, setLoading}) {
  const {objectID} = useParams() 

  const saveToExhibition = (artPiece) => {
    const exhibitions = JSON.parse(localStorage.getItem("exhibitions")) || {};
    const exhibitionName = prompt("Enter the exhibition name:"); // Ask user for exhibition name

    if (!exhibitionName) return;

    if (!exhibitions[exhibitionName]) {
      exhibitions[exhibitionName] = [];
    }

    exhibitions[exhibitionName].push(artPiece);
    localStorage.setItem("exhibitions", JSON.stringify(exhibitions));
    alert(`${artPiece.title} saved to "${exhibitionName}"`);
  };

  useEffect(() => {
    setLoading(true)
    const fetchArtPiece = async (objectID) => {
        const artPiece = metRequests.getObjectByID(objectID);
        const artPieceData = await Promise.resolve(artPiece);

        setArtPiece(artPieceData);
    };
    fetchArtPiece(objectID)
    setLoading(false)
  }, [objectID]);
  console.log(artPiece)


if(loading){
    return (
        <Container>
            <Loading/>
        </Container>)
  } else{

      if(artPiece){
          return (
              <Container>
    
                  <Row>
                    <Col md={4} className="mb-4 d-flex justify-content-center align-items-center">
                    <img src={artPiece["primaryImage"]} alt="" className="Individual-Artwork" /> 
                    </Col>
                  </Row>
    
                  <Row>
                       <Col md={12} className="mb-4">
                        <h1>{artPiece.title} </h1>
                        <p>Date: {artPiece.objectDate}</p>
                        <p>Department: {artPiece.department} </p>
                        <p></p>
                        <p>For more information, please visit:</p>
                            <p> 
                            <a href={artPiece.objectURL}>
                            {artPiece.objectURL}
                           </a>
                         </p>
                                
                    </Col>
                  </Row>
    
                  <Row>
                    <Col>
                        <Button onClick={() => saveToExhibition(artPiece)}>Save to Exhibition</Button>
                    </Col>
                  </Row>
              </Container>
          );
      }
  }

}

export default IndividualArtwork;
