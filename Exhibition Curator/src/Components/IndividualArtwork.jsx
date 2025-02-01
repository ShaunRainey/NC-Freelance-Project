import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import metRequests from "../Utilities/metMuseumApi";
import { useParams } from "react-router";
import Loading from "./Loading";
import handleError from "../Utilities/handleError";

function IndividualArtwork({artPiece, setArtPiece, loading, setLoading}) {
  const {objectID} = useParams() 

  
  useEffect(() => {
    setLoading(true)
    const fetchArtPiece = async (objectID) => {
      try {
      const artPiece = metRequests.getObjectByID(objectID);
      const artPieceData = await Promise.resolve(artPiece);
      
      setArtPiece(artPieceData);
      } catch (error) {
        handleError(error)
      }
    };
    fetchArtPiece(objectID)
    setLoading(false)
  }, [objectID]);
  console.log(artPiece)
  
  const saveToExhibition = (artPiece) => {
  if (!artPiece) {
    alert("No artwork data available to save.");
    return;
  }

  const exhibitions = JSON.parse(localStorage.getItem("exhibitions")) || {};
  const exhibitionName = prompt("Enter the exhibition name:"); // Ask user for exhibition name

  if (!exhibitionName) return;

  // Ensure exhibition entry exists with correct museum identifier
  if (!exhibitions[exhibitionName]) {
    exhibitions[exhibitionName] = { museum: "met", artworks: [] }; // ✅ Set museum as "met"
  }

  exhibitions[exhibitionName].artworks.push({ ...artPiece, museum: "met" }); // ✅ Ensure artwork has museum field

  localStorage.setItem("exhibitions", JSON.stringify(exhibitions));

  alert(`${artPiece?.title || "Untitled"} saved to "${exhibitionName}"`);
};



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
