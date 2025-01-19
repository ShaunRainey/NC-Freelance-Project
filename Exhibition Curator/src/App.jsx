import { useState } from 'react'
import './App.css'
import FeaturedArtworks from './Components/FeaturedArtworks'
import PageBrowser from './Components/PageBrowser'
import SearchBox from './Components/searchBox'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import ArtworkGallery from './Components/Example'
import { Row, Col, Container } from 'react-bootstrap'


function App() {
  

  return (
    <Container>
      <NavBar />
      <Row>
        <Col md={1}>{/* <SearchBox /> */}</Col>
        <Col>
          <FeaturedArtworks />
        </Col>
      </Row>
    </Container>
  );
}

export default App
