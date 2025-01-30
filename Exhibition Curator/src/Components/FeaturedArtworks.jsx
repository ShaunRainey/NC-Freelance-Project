import metRequests from "../Utilities/metMuseumApi";
import { useState, useEffect } from "react";
import { Card, Container, Row, Col, Form } from "react-bootstrap";
import { Link } from 'react-router'
import Loading from "./Loading";
import handleError from "../Utilities/handleError";
import FilterMuseum from "./FilterMuseum";
import VamRandom from "./VamRandom";
import MetRandom from "./metRandom";

function FeaturedArtworks({artworkIDs, setArtworkIDs, artworks, setArtworks, loading, setLoading,museum, setMuseum, handleMuseumChange}) {

  if(museum === "The Met Museum"){
    return (
      <Container> 

        <Row>
          <Form>
            <FilterMuseum handleMuseumChange={handleMuseumChange} />
          </Form>
        </Row>

          <MetRandom artworkIDs={artworkIDs} setArtworkIDs={setArtworkIDs} artworks={artworks} setArtworks={setArtworks} loading = {loading} setLoading = {setLoading} museum={museum} setMuseum={setMuseum}/>
      </Container>
  );
  } else if (museum === "Victoria and Albert Museum"){
      return (
        <Container>   

          <Row>
            <Form>
              <FilterMuseum handleMuseumChange={handleMuseumChange} />
            </Form>
          </Row>

            <VamRandom artworkIDs={artworkIDs} setArtworkIDs={setArtworkIDs} artworks={artworks} setArtworks={setArtworks} loading = {loading} setLoading = {setLoading} museum={museum} setMuseum={setMuseum}/>
        </Container>
    );
  }
  
}
export default FeaturedArtworks;